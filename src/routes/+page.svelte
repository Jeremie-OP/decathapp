<script lang="ts">
	import { page } from '$app/stores';
	import Account from './Account.svelte';
	import Auth from './Auth.svelte';
	import ProfilingShow from '../components/ProfilingShow.svelte';
  	import type { LayoutData } from './$types';
	export let data: LayoutData;
  console.log(data);
</script>

<svelte:head>
	<title>Supabase + SvelteKit</title>
	<meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>

{#if data.user}
	Bonjour {data.user.name}  
	<!-- <ProfilingShow profiling="{$page.data.user.profiling}" /> -->
{:else}
	Bonjour visiteur
	
{/if}
