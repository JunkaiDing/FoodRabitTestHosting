<script lang="ts">
    import Heading from '../../components/header/Heading.svelte'
    import PlanCard from "../../components/PlanCard.svelte";
    import {progress, selectedPlan} from '../../stores/stores';

    import { goto } from "$app/navigation";

    const handleSelectMeals = () => {
        goto("/weekly-menu")
    }

    const handleViewAccount = () => {
        goto("/dashboard")
    }

    progress.set(-1)
</script>

<Heading title="Plan has been Added"
         subtitle="Start selecting your meals now!" />

<div class="flex flex-col flex-grow w-full p-4 max-w-xl mx-auto">
    <h2 class="text-lg font-500 py-2">Plan Selected</h2>

    <PlanCard plan={$selectedPlan} />

    <div class="flex-grow flex flex-col justify-end w-full space-y-2">
        <button on:click={handleSelectMeals} class="btn-secondary w-full">
            Select Meals
        </button>
        <button on:click={handleViewAccount} class="btn w-full">
            View Account
        </button>
    </div>
</div>