import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')

      if (error) {
        throw error
      }

      setUsers(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading users...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 border rounded">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(user, null, 2)}
              </pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
} 