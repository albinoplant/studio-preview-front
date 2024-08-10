<script lang="ts">
	import AppBar from "./appBar.svelte";
	import Component from "./component.svelte";
    import Head from "./head.svelte";
    export let configuration: PageConfiguration;
    console.log(configuration.page.content)
</script>

<Head title={configuration.page.title} />
<AppBar navigation={configuration.navigation}/>

{#each configuration.page.content as componentConfig}
    <Component config={componentConfig}/>
{/each}
