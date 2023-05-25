<script lang="ts">
    import MenuItem from "./MenuItem.svelte";
    import { Storage } from "aws-amplify";
    import { selectedDay, weekSelection, earliestAvailableDay, headingTitle, headingSubTitle } from "../stores/stores";
    import { getWeeklyMenu } from "../data/mockData";
    import { goto } from "$app/navigation";
    import {WEEKDAYS} from "../data/Constants";
	import { onMount } from "svelte";
	import type { Food } from "../data/Types";
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    import { Icon, LockClosed } from "svelte-hero-icons";
    Amplify.configure(awsConfig)   

    let weeklyMenuItems: Food[][] | undefined;
    let weekSelectionImages: string[] = [];
    let firstAttempt = false;

    function handleSubmit() {
        if($weekSelection.every(item => !item)) {
            alert("You have not chosen any meals! Please at least choose 1 before continuing")
        } else if($weekSelection.slice(earliestAvailableDay).some(item => !item) && !firstAttempt) {
            firstAttempt = true
            alert("Not all days are selected! If you do select Continue again, you will not receive meals on those days. You can still edit your weekly meal plan under your dashboard!")
        } else {
            goto("/confirm-order")
        }
    }

    onMount(async () => {
        const userId = await Auth.currentAuthenticatedUser()
        weeklyMenuItems = await getWeeklyMenu();

        let tmpSelectionImages = [];
        for (let selection of $weekSelection) {
            if (selection) {
                tmpSelectionImages.push(await Storage.get(selection.url));
            } else {
                tmpSelectionImages.push("");
            }
        }
        weekSelectionImages = tmpSelectionImages;
    })

    $: headingTitle.set(`For ${WEEKDAYS[$selectedDay % 5]}, I want to eat...`)
    headingSubTitle.set("")
</script>

<div class="grid grid-cols-2 gap-4 p-8">
    {#if weeklyMenuItems}
        {#each weeklyMenuItems[$selectedDay % 5] as item}
            <a href="/weekly-menu/item-description/{item.id}">
                <MenuItem item={item} />
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
<div class="min-h-45"></div>

<div class="fixed bottom-0 w-full max-w-xl">
    {#await earliestAvailableDay then availableDay}
        <div class="absolute bottom-0 w-full h-39 bg-topaz -z-10"></div>
        <div class="flex justify-around mb-9 z-20">
            {#each WEEKDAYS as day, i}
                <button class="w-14" on:click={() => selectedDay.set(i)} disabled={i < availableDay}>
                    {#if i < availableDay}
                        <span class={"block aspect-square rounded-lg mb-2 bg-light-grey bg-cover"}
                            style={`background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${weekSelectionImages[i]})`}>
                            <Icon class="p-2" src={LockClosed} solid />
                        </span>
                    {:else}
                        <span class={`block aspect-square rounded-lg mb-2 bg-light-grey bg-cover ${i === $selectedDay ? "border-black border-3" : $weekSelection[i] ? "border-green border-3" : ""}`}
                        style={`background-image: url(${weekSelectionImages[i]})`}></span>
                    {/if}

                    <span class={"block text-[10.5px] text-center " + (i === $selectedDay ? "font-bold text-black" : "text-grey") }>{day}</span>
                </button>
            {/each}
        </div>
        <div class="px-4 pb-6">
            <button class="btn w-full" on:click={handleSubmit}>Continue</button>
        </div>
    {/await}
</div>