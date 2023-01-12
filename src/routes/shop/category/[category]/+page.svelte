<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Navbarshop from '../../Navbarshop.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination, Navigation } from 'swiper';
	import ItemCard from '../../ItemCard.svelte';

	export let data: PageData;

	import 'swiper/css';
	import { each } from 'svelte/internal';
</script>

<Navbarshop />

<div>
	<div class="display-3 fw-bold m-3">{data.category?.name}</div>
	<hr class="border-1 border-top bg-black" />

	<div class="container">
		{#each data.products as product}
					<ItemCard
						item_title={product.title}
						item_price={product.price}
						item_poster_path={product.image}
						item_id={product.id.toString()}
					/>
		{/each}
	</div>
</div>
