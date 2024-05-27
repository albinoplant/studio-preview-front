<script lang="ts">
    export let title: string;
    export let name: string = "globalconfig";
    export let content: string = "globalconfig";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name={name} content={content} />
</svelte:head>