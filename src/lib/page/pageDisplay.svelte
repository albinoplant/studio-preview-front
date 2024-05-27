<script lang="ts">
	import Head from "./head.svelte";
    export let configuration: PagePropertiesInterface;

</script>

<Head title={configuration.title} />