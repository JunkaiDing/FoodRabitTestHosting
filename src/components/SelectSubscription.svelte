<script lang="ts">
    import OneTimeCard from "./subscriptionCards/OneTimeCard.svelte";
    import WeeklyCard from "./subscriptionCards/WeeklyCard.svelte";
    import MonthlyCard from "./subscriptionCards/MonthlyCard.svelte";
    import TermCard from "./subscriptionCards/TermCard.svelte";
    import { goto } from "$app/navigation";
    import { Plan } from "../data/Enums";
    import {selectedPlan, singleSelection, weekSelection, selectedDay} from "../stores/stores";
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    Amplify.configure(awsConfig)

    async function setPlan(plan: Plan) {
        try {
            await Auth.currentAuthenticatedUser()
            selectedPlan.set(plan)
            weekSelection.update(it => {
                const newLst = [...it];
                newLst[$selectedDay] = $singleSelection
                return newLst
            })
            if ($selectedPlan == Plan.oneTime) {
                goto("/individual-menu")
            } else {
                goto("/confirm-subscription-order")
            }
            
        } catch (e) {
            goto("/sign-in")
        }
        
    }
</script>

<div class="flex flex-col gap-y-6 p-4">
    <button on:click={() => setPlan(Plan.oneTime)}>
        <OneTimeCard price="15" desc="Get 1 meal"/>
    </button>
    <button on:click={() => setPlan(Plan.weekly)}>
        <WeeklyCard price="35" desc="Get 5 meals and save $12"/>
    </button>
    <button on:click={() => setPlan(Plan.monthly)}>
        <MonthlyCard price="60" desc="Get 20 meals and save $29"/>
    </button>
    <button on:click={() => setPlan(Plan.term)}>
        <TermCard price="135" desc="Get 60 meals and save $X"/>
    </button>
</div>