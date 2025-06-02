// src/App.jsx
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import ArticlesList from './components/ArticlesList'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

export default function App() {
  const [session, setSession] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) checkIfAdmin(session.user.id)
    })
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        if (session) checkIfAdmin(session.user.id)
        else setIsAdmin(false)
      }
    )
    
    return () => subscription.unsubscribe()
  }, [])
  
  async function checkIfAdmin(userId) {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single()
        
      if (error) throw error
      setIsAdmin(data.role === 'admin')
    } catch (error) {
      console.error('Error checking admin status:', error)
      setIsAdmin(false)
    } finally {
      setLoading(false)
    }
  }
  
  async function handleLogout() {
    await supabase.auth.signOut()
  }
  
  if (loading) return <div>Loading...</div>
  
  return (
    <div className="app">
      <header>
        <h1>My Blog</h1>
        {session && (
          <button onClick={handleLogout}>Logout</button>
        )}
      </header>
      
      <main>
        {!session ? (
          <div className="public-view">
            <ArticlesList />
            <div className="admin-section">
              <h3>Admin Access</h3>
              <AdminLogin setIsAuthenticated={() => {}} />
            </div>
          </div>
        ) : isAdmin ? (
          <AdminDashboard />
        ) : (
          <div>
            <p>You're logged in but don't have admin privileges.</p>
            <ArticlesList />
          </div>
        )}
      </main>
    </div>
  )
}
