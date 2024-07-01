<script>
	import Whyus from '$lib/components/Whyus.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import News from '$lib/components/News.svelte';
	import Numbers from '$lib/components/Numbers.svelte';
	import PopularOption from '$lib/components/PopularOption.svelte';
	import Reviews from '$lib/components/Reviews.svelte';
	import VisasGrid from '$lib/components/VisasGrid.svelte';
</script>

<div style="display: flex; flex-direction:column; gap: 150px;">
	<Hero />
	<Whyus /> 
	<PopularOption /> 
	<Reviews />
	<Faq />
	<Numbers />
	<VisasGrid />
	<News />
</div>
	