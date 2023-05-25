<script lang="ts">
    import { foodChosenForOrder, earliestAvailableDay, selectedDay } from "../stores/stores";
	import type { Food, Restaurant } from "../data/Types";


    export let item:Food
    export let restaurant:Restaurant
    export let orderAction = () => {
        foodChosenForOrder.update(foods=>[...foods, item.id])
        console.log($foodChosenForOrder)
    }

    export let foodImage: string;
    export let restaurantImage: string;
    $: outDated = $selectedDay < earliestAvailableDay
</script>

{#if item && restaurant && foodImage && restaurantImage}
    <div class="m-4">
        <img class='rounded-lg aspect-square w-full shadow-lg' src="{foodImage}" alt='image of {item.name}'/>
        <div class="my-10 flex flex-col gap-4">
            <h2 class="font-bold text-xl">{item.name}</h2>
            <p class="text-grey text-sm">{item.desc}</p>
        </div>
        <div class="bg-white rounded-md shadow-sm w-full px-4 py-6">
            <h3 class="font-medium mb-3">{restaurant.name}</h3>
            <p class="text-grey text-sm mb-8">{restaurant.desc}</p>
            <img src={restaurantImage} width="60%" class="mx-auto" alt="restaurant logo"/>
        </div>
        <button class="btn w-full mt-4" disabled={outDated} on:click={orderAction}>
            {outDated? "Passed Deadline" : "Order Meal"}</button>
    </div>
{:else}
    <div class="m-4">
        <div class='rounded-lg aspect-square w-full shadow-lg bg-light-grey animate-pulse'></div>
        <div class="my-10 flex flex-col gap-4">
            <div class="w-40 h-8 rounded-full bg-light-grey animate-pulse"></div>
            <div class="w-80 h-4 rounded-full bg-light-grey animate-pulse"></div>
            <div class="w-80 h-4 rounded-full bg-light-grey animate-pulse"></div>
            <div class="w-60 h-4 rounded-full bg-light-grey animate-pulse"></div>
        </div>
        <div class="bg-white rounded-md shadow-sm w-full px-4 py-6">
            <div class="w-40 h-6 rounded-full bg-light-grey animate-pulse mb-3"></div>
            <div class="w-80 h-4 rounded-full bg-light-grey animate-pulse mb-2"></div>
            <div class="w-80 h-4 rounded-full bg-light-grey animate-pulse mb-2"></div>
            <div class="w-60 h-4 rounded-full bg-light-grey animate-pulse mb-8"></div>
            <div class='rounded-lg w-60 h-20 mx-auto shadow-lg bg-light-grey animate-pulse'></div>
        </div>
        <button class="btn w-full mt-4" disabled >Order Meal</button>
    </div>
{/if}