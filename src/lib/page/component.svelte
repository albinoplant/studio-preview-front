<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";

    export let config: BaseComponent

    let componentToRender: any | null = null;
    const category = config.__component.split(".")?.at(0)
    switch (category) {
        case "hero":
            componentToRender = Hero;
            break;
        default: 
            componentToRender = null;
    }
</script>

{#if componentToRender}
    <svelte:component this={componentToRender} {...config}/>
{/if}