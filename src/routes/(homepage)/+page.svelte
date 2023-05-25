<script>
    import Footer from '../../components/Footer.svelte';
    import IndividualMenu from "/src/components/IndividualMenu.svelte";
    import { goto } from "$app/navigation";
    import SelectSubscription from "../../components/SelectSubscription.svelte";
    import {Auth} from "aws-amplify";
	import { onMount } from 'svelte';
    import {getPlanByCustomerId} from "../../data/mockData.ts";

    let isLoggedIn = null;
    let plan;

    onMount(async () => {
        try {
            const id = (await Auth.currentAuthenticatedUser()).username;
            isLoggedIn = true
            plan = await getPlanByCustomerId(id)
        } catch (e) {
            isLoggedIn = false
        }
    });

</script>

<div class="flex flex-col gap-y-1.5 p-4 my-3">
    <button class="btn" on:click={() => goto(isLoggedIn ? plan ? "/weekly-menu" : "/individual-menu" : "/select-subscription")}>
        Order Now
    </button>
    {#if isLoggedIn === false}
        <button class="btn-secondary drop-shadow-md" on:click={() => goto("/sign-in")}>Sign in</button>
    {/if}
</div>

<div class="mx-11 pt-8 flex flex-col gap-y-3">
    <h2 class="font-bold text-2xl text-center">This Week's Menu</h2>
    <p class="text-xs text-center font-dm">Take a look at our meal options for each day.</p>
</div>

<IndividualMenu />

{#if !plan}
    <div class="mx-11 py-8 flex flex-col gap-y-3">
        <h2 class="font-bold text-2xl text-center">Subscription Plans</h2>
        <p class="text-xs font-dm text-grey text-center">Find a meal plan that suits your needs. The more meals you buy at once, the more you save.</p>
    </div>

    <SelectSubscription />
{/if}

<Footer />