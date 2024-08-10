<script lang="ts">
    export let navigation
    export let siteName
</script>
<div class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl">{siteName}</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            {#if navigation}
                {#each navigation as navigationItem}
                    <li>
                        <a href={navigationItem.path}>{navigationItem.title}</a>
                    </li>
                {/each}
            {/if}
        </ul>
    </div>
</div>