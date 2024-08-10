<script lang="ts">
	import AppBar from "./appBar.svelte";
    import Head from "./head.svelte";
    export let configuration: PagePropertiesInterface;

</script>

<Head title={configuration.title} />
<AppBar/>