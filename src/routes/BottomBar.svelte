<script>
	import { page } from "$app/stores";
</script>

<div class="nav justify-content-center">
	<button class="btn m-0 p-0 nav-item" class:active={$page.url.pathname.startsWith('/store')}>
		<div class="container" onclick="window.location='/magasin';">
			<i class="material-icons">home</i><br>
			<span>Magasin</span>
		</div>
	</button>
	<button class="btn m-0 p-0 nav-item" class:active={$page.url.pathname.startsWith('/shop')}>
		<div class="container" onclick="window.location='/shop';">
			<i class="material-icons">local_mall</i><br>
			<span>Catalogue</span>
		</div>
	</button>
	<button class="btn m-0 p-0 nav-item" class:active={$page.url.pathname.startsWith('/basket')}>
		<div class="container" onclick="window.location='/basket';">
			<i class="material-icons">shopping_basket</i><br>
			<span>Panier</span>
		</div>
	</button>
	<button class="btn m-0 p-0 nav-item" class:active={$page.url.pathname.startsWith('/user')}>
		<div class="container" onclick="window.location='/user';">
			<i class="material-icons">manage_accounts</i><br>
			{#if !$page.data.session}<span>Connexion</span>
			{:else}<span>Compte</span>{/if}
		</div>
	</button>
</div>

<style lang="scss">
	button:active i {
		color: #007aff;
	}
	i{
		font-size: 30px;}
	span{
		font-size: 16px;
	}
</style>
