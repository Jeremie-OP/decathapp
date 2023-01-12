<script lang="ts">
	import type { Decimal } from "@prisma/client/runtime";


	export let item_title = '';
	export let item_price  = 0;
	export let item_id = '';
	// export let item_overview = '';
	export let item_poster_path = '';
	// let img_url = 'https://nmvalfffrvupnkmqtnyj.supabase.co/storage/v1/object/public/img/';
    // img_url += item_poster_path; 
</script>

<div class="card h-100 shadow-sm" style="width: 8rem;" onclick="window.location='/shop/{item_id}';">
	<img src={item_poster_path} class="card-img-top" alt={item_poster_path}
	/>
	<div class="card-body">
		<div class="text-center">{item_price}€</div>
		<div class="card-title text-justify lh-1" style="font-weight: bold ;font-size: x-small;">{item_title}</div>
		<!-- <small class="card-text">{item_overview}</small> -->
	</div>
</div>
