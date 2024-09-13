<script>
	import Whyus from '$lib/components/Whyus.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import News from '$lib/components/News.svelte';
	import Numbers from '$lib/components/Numbers.svelte';
	import PopularOption from '$lib/components/PopularOption.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import VisasGrid from '$lib/components/VisasGrid.svelte';
	import { page } from '$app/stores';

	export let data
	export let form


</script>	

<svelte:head>
	<title>Визовое агентство в Москве - Оформление виз быстро и просто</title>
	<meta name="description" content="Визовое агентство в Москве. Помощь в оформлении виз для поездок в любую страну. Профессиональная поддержка, минимальные сроки, доступные цены.">
	<meta name="og:title" content="Визовое агентство в Москве - Быстрое оформление виз">
	<meta name="og:description" content="Оформление виз для поездок в любую страну. Надежная помощь в Москве. Опытные специалисты, индивидуальный подход.">
	<meta name="og:url" content={$page.url.href}>
	<meta name="og:image" content="https://визовое-агентство.москва/logo.svg">
</svelte:head>


<main >
	<Hero />
	<Whyus /> 
	<PopularOption /> 
	<Reviews />
	<Faq />
	<Numbers />
	<VisasGrid />
	<News />
</main>
	