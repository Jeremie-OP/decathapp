<script>
	import { page } from '$app/stores'
	import Account from './Account.svelte'
	import Auth from './Auth.svelte'
  </script>
  
  <svelte:head>
	<title>Se connecter</title>
	<meta name="description" content="Se connecter sur DecAppthlon" />
  </svelte:head>
  
  {#if !$page.data.session}
  <Auth />
  {:else}
  <Account session="{$page.data.session}" />
  {/if}
  