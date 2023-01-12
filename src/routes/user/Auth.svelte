<script lang="ts">
    import { supabase } from '$lib/supabaseClient'
  
    let loading = false
    let email: string
  
    const handleLogin = async () => {
      try {
        loading = true
        const { error } = await supabase.auth.signInWithOtp({ email })
        if (error) throw error
        alert('Veuillez verifier vos emails pour avoir le lien de connexion!')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  </script>
  
  <form class="row flex-center flex p-3" on:submit|preventDefault="{handleLogin}">    
    <div class="">
      <h1 class="header">Vous connecter</h1>
      <label for="email" class="description form-label">Veuillez renseigner votre adresse email</label>
      <div>
        <input class="form-control" type="email" placeholder="Votre adresse email" bind:value="{email}" />
      </div>
      <div>
        <input type="submit" class="button block" value={loading ? 'Loading' : 'Envoyer lien magique'}
        disabled={loading} />
      </div>
    </div>
  </form>