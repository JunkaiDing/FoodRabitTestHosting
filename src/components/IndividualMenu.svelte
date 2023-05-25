<script lang="ts">
    import MenuItem from "./MenuItem.svelte";
    import {getWeeklyMenu} from "../data/mockData";
    import {selectedDay, earliestAvailableDay} from "../stores/stores";
    import {WEEKDAYS} from "../data/Constants";
	import { onMount } from "svelte";
	import type { Food } from "../data/Types";

    let weeklyMenuItems:Food[][]|undefined;
    onMount(async()=>{ weeklyMenuItems = await getWeeklyMenu()})
</script>


<div class="flex justify-around overflow-auto mt-8">
    {#each WEEKDAYS as dayName, i}
        <button class={`rounded-lg py-2 w-16 ${$selectedDay === i ? 'bg-[#ffc172]' : ''} ${i < earliestAvailableDay ? 'text-grey' : ''}`} on:click={() => selectedDay.set(i)}>{dayName}</button>
    {/each}
</div>
<div class="grid grid-cols-2 gap-4 md:gap-8 p-8">
    {#if weeklyMenuItems}
        {#each weeklyMenuItems[$selectedDay] as item}
            <a href="/individual-menu/item-description/{item.id}">
                <MenuItem item={item} outDated={$selectedDay < earliestAvailableDay} />
            </a>
        {/each}
    {:else}
        {#each Array(4) as test}
            <div class="flex flex-col gap-y-2.5 max-w-xs ">
                <div class="max-w-xs aspect-square animate-pulse bg-light-grey rounded-lg"></div>
                <div class="max-w-xs aspect-square h-4 animate-pulse bg-light-grey rounded-lg"></div>
            </div>
        {/each}
    {/if}
</div>