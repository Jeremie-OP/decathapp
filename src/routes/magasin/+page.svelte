<script lang="ts">
	// import type { LayoutData } from './$types';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination, Navigation } from 'swiper';

	// export let dataLayout: LayoutData;
	export let data: PageData;

    export let products = data.products.slice(0, 3);

	import 'swiper/css';
	import ItemCard from '../shop/ItemCard.svelte';
	console.log(data);
</script>

<div class="bg-primary text-center p-2">
    <div class="display-1 text-primary bg-white mt-4 mx-4">DECAPPTHLON</div>
    <div class="display-5 text-white">A fond la proximité</div>
</div>

<Swiper
	spaceBetween={50}
	slidesPerView={1}
	autoplay={{
		delay: 10000,
		disableOnInteraction: false
	}}
	loop={true}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail)}
	modules={[Autoplay]}
>
	<SwiperSlide
		><img
			src="https://nmvalfffrvupnkmqtnyj.supabase.co/storage/v1/object/public/img/Innovathlon.png"
			alt="promo"
		/></SwiperSlide
	>
	<SwiperSlide
		><img
			src="https://nmvalfffrvupnkmqtnyj.supabase.co/storage/v1/object/public/img/Decathlon21.png"
			alt="promo"
		/></SwiperSlide
	>
	<SwiperSlide
		><img
			src="https://nmvalfffrvupnkmqtnyj.supabase.co/storage/v1/object/public/img/slider%20desktop.webp"
			alt="coach"
		/></SwiperSlide
	>
</Swiper>

<div>    
	<h3 class="pt-1">Quoi de neuf dans votre magasin ?</h3>
    <ul class="list-group">
        <li class="list-group-item"><span class="fw-bold">Aujourd'hui - 13h </span>→ Initiation au roller </li>
    </ul>
</div>

<div class="bg-warning pb-2">
	<h3 class="pt-1">A portée de main</h3>
	<Swiper class="ps-1" slidesPerView={3} spaceBetween={2}>
		{#each products as product}
			<SwiperSlide>		
				<div onclick="window.location='/shop/{product.id}';" >		
				<ItemCard
					item_title={product.title}
					item_poster_path={product.image}
					item_price={product.price}
				/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>