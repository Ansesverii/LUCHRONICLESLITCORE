import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      })

      if (error) {
        console.error('Login error:', error)
        setError(error.message)
        return
      }

      if (data.user) {
        // Check if user has admin role
        try {
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .single()
          
          console.log('User profile:', { profile, profileError })
          
          if (profileError) {
            // If profile doesn't exist, create one with default role
            if (profileError.code === 'PGRST116') {
              console.log('Profile not found, creating default profile')
              const { error: insertError } = await supabase
                .from('profiles')
                .insert({ id: data.user.id, role: 'user' })
              
              if (insertError) {
                console.error('Failed to create profile:', insertError)
                setError('Failed to create user profile')
                return
              }
              
              // For now, allow access even with 'user' role
              navigate('/admin-dashboard')
            } else {
              console.error('Profile fetch error:', profileError)
              setError('Failed to verify user permissions')
              return
            }
          } else {
            // Profile exists, check role - enforce admin access
            console.log('User role:', profile?.role)
            
            if (profile?.role === 'admin') {
              console.log('Admin access granted')
              navigate('/admin-dashboard')
            } else {
              console.log('Access denied - not an admin')
              setError('Access denied. Admin privileges required.')
              // Sign out non-admin users
              await supabase.auth.signOut()
            }
          }
        } catch (profileError) {
          console.error('Profile check error:', profileError)
          setError('Failed to verify user permissions')
        }
      }
    } catch (error) {
      console.error('Login catch error:', error)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {error && (
          <div style={{ color: 'red', padding: '0.5rem', backgroundColor: '#fee', borderRadius: '4px' }}>
            {error}
          </div>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            padding: '0.75rem', 
            backgroundColor: loading ? '#ccc' : '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
