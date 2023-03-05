<script lang="ts">
	// import type { LayoutData } from './$types';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Navbarshop from './Navbarshop.svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Pagination, Navigation } from 'swiper';

	// export let dataLayout: LayoutData;
	export let data: PageData;

	import 'swiper/css';
	import ItemCard from './ItemCard.svelte';
	console.log(data);
</script>

<Navbarshop categories={data.categories} />

<Swiper
	spaceBetween={50}
	slidesPerView={1}
	autoplay={{
		delay: 5000,
		disableOnInteraction: false
	}}
	loop={true}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail)}
	modules={[Autoplay]}
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

<div class="row m-1">
	<div class="col text-center">
		<button class="btn btn-primary w-100 mb-2"> Homme </button><br />
		<button class="btn btn-success w-100"> EcoVert </button>
	</div>
	<div class="col text-center">
		<button class="btn btn-danger w-100 mb-2"> Femme </button><br />
		<button class="btn btn-warning w-100"> Promo </button>
	</div>
</div>

{#if !data.defaultProfil}
<div class="bg-info pb-2">
	<h3 class="pt-1">On a pensé que ça vous plairait</h3>
	<Swiper class="ps-1" slidesPerView={3} spaceBetween={2}>
		{#each data.recommendedProducts as product}
			<SwiperSlide>		
				<div>		
				<ItemCard
					item_title={product.title}
					item_poster_path={product.image}
					item_price={product.price}
					item_id={product.id}
				/>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
{/if}

<div class="bg-warning pb-2">
	<div class="h3 pt-1 fw-bold">Les promos</div>
	<Swiper class="ps-1" slidesPerView={3} spaceBetween={2}>
		{#each data.products as product}
			<SwiperSlide>
				<ItemCard
					item_title={product.title}
					item_poster_path={product.image}
					item_price={product.price}
					item_id={product.id}
				/>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

<div class="bg-success pb-2">
	<div class="h3 pt-1 fw-bold">Le football c'est top</div>
	<Swiper class="ps-1" slidesPerView={3} spaceBetween={2}>
		{#each data.products.filter(p => p.category.name == "Football") as product}
			<SwiperSlide>
				<ItemCard
					item_title={product.title}
					item_poster_path={product.image}
					item_price={product.price}
					item_id={product.id}
				/>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>