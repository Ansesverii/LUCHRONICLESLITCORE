import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

export default function SupabaseTest() {
  const [testData, setTestData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function testConnection() {
      try {
        // Try to fetch the current user to test the connection
        const { data, error } = await supabase.auth.getUser()
        
        if (error) {
          throw error
        }
        
        setTestData(data)
      } catch (err) {
        setError(err.message)
      }
    }

    testConnection()
  }, [])

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        <h2 className="font-bold">Connection Error:</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="p-4 bg-green-100 text-green-700 rounded">
      <h2 className="font-bold">Supabase Connection Status:</h2>
      <p>Connected successfully!</p>
      {testData && (
        <pre className="mt-2 p-2 bg-white rounded">
          {JSON.stringify(testData, null, 2)}
        </pre>
      )}
    </div>
  )
} 