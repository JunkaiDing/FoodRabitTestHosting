<script lang="ts">
    import PlanCard from '../../../components/PlanCard.svelte'
	import { createPlan } from '../../../graphql/mutations';
	import PaymentForm from '../../../components/PaymentForm.svelte';
	import Spinner from '../../..//components/Spinner.svelte';
	import {headingSubTitle, headingTitle, progress, selectedPlan} from "../../../stores/stores";
    import { Plan } from "../../../data/Enums";
	import {getPlanDetails, setUserPlan} from '../../../data/mockData'
	import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
	import awsConfig from '../../../aws-exports';
	import { goto } from '$app/navigation';
	
	Amplify.configure(awsConfig);

	const weekDays = ['M', 'Tu', 'W', 'Th', 'F']

	const handlePlaceOrder = async () => {
		try {
			const plan = $selectedPlan
			const planDetails = getPlanDetails(plan)
			await handleSubmit()

			const remainingCredits = planDetails.credits

			const startDate = new Date()
			const endDate = new Date(startDate.getTime() + 1000 * 60 * 60 * 24 * planDetails.days)

			let createPlanResponse = await API.graphql(
					graphqlOperation(createPlan, {
						input: {
							type: plan,
							remaining_credits: remainingCredits,
							start_date: startDate.toISOString(),
							expiry_date: endDate.toISOString()
						}
					})
				);
			const planId = createPlanResponse.data.createPlan.id

			const userId = (await Auth.currentAuthenticatedUser()).username

			const userPlanResponse = await setUserPlan(userId, planId)

			goto("subscription-order-success")
		} catch (e) {
			console.log(e)
		}

		return;
	};
	let handleSubmit: () => Promise<any>;
	let processing = false
	

	progress.set(4);
	headingTitle.set("Confirm Order Details")
	headingSubTitle.set("Please check that all the information below is correct and accurate.")
</script>

<div class="flex flex-col flex-grow h-full w-full">
        <div class="flex flex-col w-full p-4 justify-center">
            <h2 class="text-lg font-500 py-2">Plan Selected</h2>
            <PlanCard plan={$selectedPlan} />

			<h2 class="text-lg font-500 mt-8">Payment Method</h2>
			
			<PaymentForm bind:handleSubmit={handleSubmit} bind:processing={processing} />
		</div>

		<div class="flex flex-grow justify-end p-4">
			<button on:click={handlePlaceOrder} class="btn w-full mt-auto flex justify-center items-center" disabled={processing}>
				{#if processing}
					<div class="h-6 w-6 mr-2">
						<Spinner/>
					</div>
					Processing...
				{:else}
					Place Order
				{/if}
        	</button>
		</div>
</div>
