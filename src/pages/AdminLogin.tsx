// Add this to your AdminLogin.tsx or any component temporarily
import { supabase } from '../lib/supabase' // adjust path

// Add this in useEffect or button click
const testConnection = async () => {
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
  
  // Test database connection
  const { data, error } = await supabase.from('articles').select('count', { count: 'exact' })
  console.log('DB Connection test:', { data, error })
  
  // Test auth connection
  const { data: authData, error: authError } = await supabase.auth.getSession()
  console.log('Auth test:', { authData, authError })
}
