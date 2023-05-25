<script lang="ts">
    import InfoCard from '../../../components/genericComponents/infoCard/InfoCard.svelte'
	import {headingSubTitle, headingTitle, progress, selectedPlan, weekSelection} from "../../../stores/stores";
    import { Plan } from "../../../data/Enums";
	import { onMount } from 'svelte';
	import { API, Auth, graphqlOperation, Storage, Amplify } from 'aws-amplify';
	import type { Customer, DeliveryInfo } from 'src/data/Types';
	import { getPlan } from '../../../graphql/queries';
	import { createOrder, deleteOrder, updateCustomer, updatePlan } from '../../../graphql/mutations';
	import { calculateDayDifference, getFirstOrderArrivalDate } from './dateHelpers';
	import { getCustomer } from '../../../data/mockData';

    import awsConfig from '../../../aws-exports';
	import type { FormattedDeliveryInfo, PlanType } from '../../../data/Types';
	import { getFormattedDeliveryInfo, getPlanByCustomerId, getPlanDetails } from '../../../data/mockData';
	import { goto } from '$app/navigation';
    Amplify.configure(awsConfig)

	const orderDate = new Date()
	let firstDeliveryDate = getFirstOrderArrivalDate(orderDate)
	$: date = firstDeliveryDate.toLocaleDateString(undefined, {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	});
	let approxArrivalTime = '5-7pm';
	let creditCard = 'Visa ending in 1230';
	let userId: string;
	let customer: Customer|undefined
    let deliveryInfo: FormattedDeliveryInfo|undefined
	let planSelected;
	const weekDays = ['M', 'Tu', 'W', 'Th', 'F']
	const handlePlaceOrder = async () => {
		console.log('food for week',$weekSelection)
		let updateDeliveryAddrInput={
			id: userId,
			name: deliveryInfo.Name,
			email: deliveryInfo?.Email,
			phone_number: deliveryInfo?.['Phone Number'],
			address: deliveryInfo?.Address,
			unit: deliveryInfo?.['Apt, Suite, Unit, Building'],
			delivery_notes: deliveryInfo?.['Delivery Notes']
        }
		// get existing credits
		let planId = plan?.id
		let getPlanResponse: any = await API.graphql(
			graphqlOperation(getPlan, {
				id:planId	
			})
		);
		console.log('getplanresponse',getPlanResponse)
		let creditsRemaining=getPlanResponse.data.getPlan.remaining_credits
		console.log('cr remaining', creditsRemaining)

		for (const [index, food] of $weekSelection.entries()) {

			if (!food){
				continue;
			}
			
			if (creditsRemaining-1<0){
				throw new Error('not enough credits')
			}


			const deliveryDate = new Date(firstDeliveryDate);
			deliveryDate.setDate(deliveryDate.getDate()+ calculateDayDifference(deliveryDate, index+1));

			// if the delivery date is on a weekend, don't make the order
			if (deliveryDate.getDay() == 6 && deliveryDate.getDay() == 0){
				continue;
			}

			let orderInput={
				address: deliveryInfo?.Address,
				customerOrdersId: userId,
				delivery_notes: deliveryInfo?.['Delivery Notes'],
				foodOrdersId: food.id,
				fulfilled: false,
				unit: deliveryInfo?.['Apt, Suite, Unit, Building'],
				date: deliveryDate
			}

			
			// create order
			let createOrderResponse = await API.graphql(
				graphqlOperation(createOrder, {
					input: orderInput
			}))
			console.log('createorderresponse',createOrderResponse)
			let orderId = createOrderResponse.data.createOrder.id

			try{
				// deduct credit from plan
				let updateCreditResponse: any = await API.graphql(
					graphqlOperation(updatePlan, {
						input: {
							id: planId,
							remaining_credits:creditsRemaining-1
						}
				}))
				console.log('updateCreditResponse',updateCreditResponse)
			}catch(e){
				// if can't deduct credit, delete the order that was made
				console.log('error deducting credits')
				let deleteOrderResponse: any = await API.graphql(
					graphqlOperation(deleteOrder, {
						input: {
							id: orderId
				}}))
			}
			creditsRemaining--;
			console.log('crremaining',creditsRemaining)
		}					
		goto('order-success')
		return;
	};

	let plan: PlanType|undefined

	let processing = false
	let creditsUsed = $weekSelection.reduce((prevVal, currentVal) => {
		if (currentVal !== null && currentVal !== undefined) return prevVal + 1
		else return prevVal
	}, 0)

	progress.set(4);
	headingTitle.set("Confirm Order Details")
	headingSubTitle.set("Please check that all the information below is correct and accurate.")

	onMount(async () => {
		if ($weekSelection.filter((food) => food !== null).length === 0) {
			goto("/weekly-menu")
		}

        userId = (await Auth.currentAuthenticatedUser()).username
        deliveryInfo = await getFormattedDeliveryInfo(userId)
		plan = await getPlanByCustomerId(userId)
    })
</script>

<div class="flex flex-col flex-grow h-full w-full">
        <div class="flex flex-col w-full p-4 justify-center">
            <h2 class="text-lg font-500 py-2">Plan Selected</h2>
			{#if plan}
				<InfoCard leftSideGraphic="None">
					<div class="text-xl font-500" slot="header">
						{#if plan.type === Plan.weekly}
							Weekly
						{:else if plan.type === Plan.monthly}
							Monthly
						{:else if plan.type === Plan.term}
							Term
						{:else}
							No plan added
						{/if}
					</div>
					<div slot="body">
						{creditsUsed} meal credits selected
						
						<p class="text-black text-md">
							You will have: {plan.remaining_credits - creditsUsed}/{getPlanDetails(plan.type).credits} credits remaining
						</p>
					</div>
				</InfoCard>
			{/if}

			<h2 class="text-lg font-500 mt-8">Delivery Information</h2>
			<!-- <InfoCard leftSideGraphic="none">
				<div slot="header">
					Delivery will arrive on {date} at {approxArrivalTime} to
				</div>
				<div slot="body">
					{#if deliveryInfo}<p>{deliveryInfo.name}</p>{/if}
					{#if deliveryInfo}<p>{deliveryInfo.address}</p>{/if}
					{#if deliveryInfo}<p>{deliveryInfo.tel}</p>{/if}
				</div>
				
			</InfoCard> -->
			<InfoCard leftSideGraphic="Two Columns" colContents={deliveryInfo} />

			<button on:click={() => goto('/delivery-info?redirect=confirm')} class="btn w-full mt-1">
				Edit Information
			</button>

			<h2 class="text-lg font-500 mt-8 mb-1">Selected Meal</h2>

			{#each $weekSelection as meal, i}
				{#if meal !== null && meal !== undefined}
					{#await Storage.get(meal.url) then img}
						<InfoCard leftSideGraphic="Text" leftSideText={weekDays[i]} rightSideImage={img} stackCards>
							<div slot="header" class="text-grey font-500">
								{meal.name}
							</div>
						</InfoCard>
					{/await}
				{/if}
			{/each}
		</div>
		<div class="flex flex-grow justify-end p-4">
			<button on:click={handlePlaceOrder} class="btn w-full mt-auto" disabled={processing}>
				{#if processing}
					Processing...
				{:else}
					Place Order
				{/if}
			</button>
		</div>
</div>
