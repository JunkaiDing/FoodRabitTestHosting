<script lang="ts">
    export let title = ''
    export let subtitle = ''
</script>

{#if title}
    <div class="bg-white flex flex-col items-center w-full p-2">
        <h1 class="font-bold text-3xl text-center max-w-xl">{title}</h1>
        {#if subtitle}
            <p class="text-sm text-grey text-center pt-6 pb-4 max-w-xl">{subtitle}</p>
        {/if}
    </div>
{/if}