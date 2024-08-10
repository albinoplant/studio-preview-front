<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";

    export let config: Component
</script>
{#if config.__component == 'section.hero'}
    <Hero {...config}/>
{/if}

<code>{config.__component}</code>