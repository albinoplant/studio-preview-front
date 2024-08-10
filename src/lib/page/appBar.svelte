<script lang="ts">
    export let navigation
</script>
{#if navigation}
    {#each navigation as navigationItem}
        <a href={navigationItem.path}>{navigationItem.title}</a>
    {/each}
{/if}