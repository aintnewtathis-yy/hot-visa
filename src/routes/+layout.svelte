<script>
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
    
    export let data;
</script>

<Header />

<slot />

<Footer />