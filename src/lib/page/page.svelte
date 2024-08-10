<script>
	import PageDisplay from "./pageDisplay.svelte";
    import { getContext } from 'svelte';

    const configuration = getContext('page')
</script>

<PageDisplay configuration={configuration}/>