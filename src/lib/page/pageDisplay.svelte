<script lang="ts">
	import AppBar from "./appBar.svelte";
	import Component from "./component.svelte";
    import Head from "./head.svelte";
    export let configuration: PageConfiguration;
</script>

<Head title={configuration.page.title} />
<AppBar siteName={configuration.info.siteName} navigation={configuration.navigation}/>

{#each configuration.page.content as componentConfig}
    <Component config={componentConfig}/>
{/each}
