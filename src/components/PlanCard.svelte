<script lang="ts">
    import OneTimeCard from "./subscriptionCards/OneTimeCard.svelte";
    import WeeklyCard from "./subscriptionCards/WeeklyCard.svelte";
    import MonthlyCard from "./subscriptionCards/MonthlyCard.svelte";
    import TermCard from "./subscriptionCards/TermCard.svelte";
	import { Plan } from "../data/Enums";
    
    export let plan: Plan

</script>

{#if plan === Plan.weekly}
                <WeeklyCard price="35" desc="Get 5 meals and save $12" />
            {:else if plan === Plan.monthly}
                <MonthlyCard price="60" desc="Get 20 meals and save $29" />
            {:else if plan === Plan.term}
                <TermCard price="135" desc="Get 60 meals and save $X" />
				<!-- TODO add saved money amount -->
            {:else}
                <OneTimeCard price="15" desc="Get one meal" />
            {/if}