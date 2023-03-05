import { createClient } from '@supabase/auth-helpers-sveltekit'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$lib/Env'

let supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL || SUPABASE_URL;
let supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Make a request
const { data: todos, error } = await supabase.from('todos').select('*')