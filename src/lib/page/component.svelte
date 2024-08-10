<script lang="ts">
    export let config: Component
</script>
{#if config.__component == 'section.hero'}
    <h1>{config.title}</h1>
    <h2>{config.subtitle}</h2>
{/if}

<code>{config.__component}</code>