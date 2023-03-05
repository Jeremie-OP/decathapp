import { createClient } from '@supabase/auth-helpers-sveltekit'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$lib/Env'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Make a request
const { data: todos, error } = await supabase.from('todos').select('*')