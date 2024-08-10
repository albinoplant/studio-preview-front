<script>
	import Page from '$lib/page/page.svelte';
	import { setContext } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	setContext('page', data)
</script>

<Page/>

