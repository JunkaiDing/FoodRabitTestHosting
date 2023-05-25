<script lang="ts">
    import { Storage } from "aws-amplify";

	import type { Food } from "../data/Types";

    export let item:Food

    export let outDated = false
</script>
{#await Storage.get(item.url)}
    <div class="flex flex-col gap-y-2.5 max-w-xs ">
        <div class="max-w-xs aspect-square animate-pulse bg-light-grey rounded-lg"></div>
        <div class="max-w-xs aspect-square h-4 animate-pulse bg-light-grey rounded-lg"></div>
    </div>
{:then image}
    <div class="flex flex-col gap-y-2.5 max-w-xs grayscale blur-lg">
        <img class={`${outDated ? 'grayscale' : ''} filter shadow-md rounded-lg aspect-square object-cover`} src={image} alt="image of {item.name}"/>
        <p class="text-center">{item.name}</p>
    </div>
{/await}

