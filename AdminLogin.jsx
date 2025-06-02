// src/components/AdminLogin.jsx
import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function AdminLogin({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) throw error
      
      // Check if user is admin (you'll need to implement this based on your user roles)
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', data.user.id)
        .single()
        
      if (userError) throw userError
      
      if (userData.role !== 'admin') {
        throw new Error('Access denied. Only admins can login.')
      }
      
      setIsAuthenticated(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
