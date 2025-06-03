import { createClient } from '@supabase/supabase-js'

// Environment variables with validation
const getEnvVar = (key: string): string => {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(
      `Missing environment variable: ${key}. ` +
      'Please check your .env file and ensure it contains the required variables.'
    )
  }
  return value
}

// Get Supabase credentials with validation
const supabaseUrl = getEnvVar('VITE_SUPABASE_URL')
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY')

// Validate URL format
if (!supabaseUrl.startsWith('https://')) {
  throw new Error('Invalid Supabase URL format. URL must start with https://')
}

// Create Supabase client with type safety
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  }
})

// Export a default instance
export default supabase

// Type definitions for your database tables
export type Database = {
  public: {
    Tables: {
      // Add your table definitions here
      // Example:
      // profiles: {
      //   Row: {
      //     id: string
      //     created_at: string
      //     name: string
      //     // ... other columns
      //   }
      //   Insert: {
      //     id?: string
      //     created_at?: string
      //     name: string
      //     // ... other columns
      //   }
      //   Update: {
      //     id?: string
      //     created_at?: string
      //     name?: string
      //     // ... other columns
      //   }
      // }
    }
  }
}

// Authentication helper functions
export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signUpWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Subscribe to auth state changes
export const onAuthStateChange = (callback: (event: 'SIGNED_IN' | 'SIGNED_OUT' | 'USER_UPDATED', session: any) => void) => {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event as 'SIGNED_IN' | 'SIGNED_OUT' | 'USER_UPDATED', session)
  })
} 
