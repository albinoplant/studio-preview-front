<script lang="ts">
	import { onMount } from "svelte";

    let navigationItems: NavigationItemModel[] | null = null
    onMount(async () => {
        const response = await fetch('/api/navigations/main')
        navigationItems = await response.json()
        console.log(navigationItems)
    })
</script>
{#if navigationItems}
    {#each navigationItems  as navigationItem}
        <a href={navigationItem.path}>{navigationItem.title}</a>
    {/each}
{/if}