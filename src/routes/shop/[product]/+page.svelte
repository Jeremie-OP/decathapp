<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Navbarshop from '../Navbarshop.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination, Navigation } from 'swiper';
	import ItemCard from '../ItemCard.svelte';

	export let data: PageData;
	console.log(data);
	import 'swiper/css';
</script>

<Navbarshop />

<div>
	<img class="img-thumbnail p-2 " src={data.product?.image} alt={data.product?.title} />
	<div class="m-3">
		<div class="fw-bolder h4">{data.product?.title}</div>
		<p class="ms-2">{data.product?.price}€</p>
		<p class="text-justify lh-1">{data.product?.description}</p>
	</div>
</div>

<div class="bg-warning p-2 ">
	<div class="h4 fw-bold lh-1">Des produits qui pourraient aussi vous intéresser</div>
	<Swiper
        spaceBetween={3}
        slidesPerView={3}
    >
		{#each data.products as product}
			<SwiperSlide>
				<div>
					<ItemCard
						item_title={product.title}
						item_poster_path={product.image}
						item_price={product.price}
						item_id={product.id.toString()}
					/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
