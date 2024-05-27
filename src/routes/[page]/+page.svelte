<script>
	import PageDisplay from '$lib/page/pageDisplay.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<PageDisplay configuration={{title: data.title ?? ""}}/>

<h1>{data.title}</h1>
