
import { getServerSession } from '@supabase/auth-helpers-sveltekit'
import type { PageServerLoad } from './$types'
import { getUser } from '$lib/PrismaDb'
import { supabase } from '$lib/supabaseClient'
import type { Profiling } from "@prisma/client";

// export const load: PageServerLoad = async (event) => {
//     const session = await getServerSession(event)
//     if (session && session.user.email) {
//         const { data, error, status } = await supabase
//             .from('profiles')
//             .select(`username, website, avatar_url`)
//             .eq('id', session.user.id)
//             .single()
//         const email = session.user.email
//         const username = data?.username
//         const user = await getUser(email, username)
//         return { user: user, session: session }
//     }
//     const visitorProfiling :Profiling = {id: -1, sexe: 5, age: 5, csp: 5, balle: 0, raquette: 0, aquatique: 0, ecolo: 0 }
//     return { session: session, profiling: visitorProfiling }
// }
