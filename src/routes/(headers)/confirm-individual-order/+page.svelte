<script lang="ts">
    import InfoCard from '../../../components/genericComponents/infoCard/InfoCard.svelte'
	import PaymentForm from '../../../components/PaymentForm.svelte';
	import {headingSubTitle, headingTitle, progress, singleSelection, selectedDay} from "../../../stores/stores";
	import {Amplify, Auth, Storage, API, graphqlOperation} from "aws-amplify";
    import awsConfig from '../../../aws-exports';
    import { onMount } from 'svelte';
	import type { FormattedDeliveryInfo } from '../../../data/Types';
	import { getFormattedDeliveryInfo, getPlanByCustomerId } from '../../../data/mockData';
	import { goto } from '$app/navigation';
	import { getPlan } from '../../../graphql/queries';
	import { createOrder, updatePlan, deleteOrder } from '../../../graphql/mutations';
	import { calculateDayDifference, getFirstOrderArrivalDate } from '../confirm-order/dateHelpers';
    Amplify.configure(awsConfig)
	const orderDate = new Date()
	let firstDeliveryDate = getFirstOrderArrivalDate(orderDate)
	$: date = orderDate.toLocaleDateString(undefined, {
		weekday: 'long',
		month: 'long',
		day: 'numeric'
	});

	let userId: string;

	const weekDays = ['M', 'Tu', 'W', 'Th', 'F']

	const handlePlaceOrder = async () => {

		try {
		await handleSubmit()
		console.log('food selected',$singleSelection)
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


		// for (const [index, food] of $weekSelection.entries()) {
			
			if (creditsRemaining-1<0){
				throw new Error('not enough credits')
			}

			const deliveryDate = new Date(firstDeliveryDate);
			deliveryDate.setDate(deliveryDate.getDate()+ calculateDayDifference(deliveryDate, $selectedDay+1));

			// if the delivery date is on a weekend, don't make the order
			if (deliveryDate.getDay() == 6 && deliveryDate.getDay() == 0){
				return;
			}

			let orderInput={
				address: deliveryInfo?.Address,
				customerOrdersId: userId,
				delivery_notes: deliveryInfo?.['Delivery Notes'],
				foodOrdersId: $singleSelection.id,
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
			goto("order-success")
		} catch (e) {
			console.log(e)
		}

		return;
	};

    let deliveryInfo: FormattedDeliveryInfo|undefined
	let plan: PlanType|undefined

	let handleSubmit: () => Promise<any> 
		// = async()=>{
		// // }	
		// }
	let processing = false

	progress.set(4);
	headingTitle.set("Confirm Order Details")
	headingSubTitle.set("Please check that all the information below is correct and accurate.")

	onMount(async () => {
		console.log('selectedday',$selectedDay)
		console.log('singleSelection',$singleSelection)

		if (!$singleSelection) {
			goto("individual-menu")
		}

    	userId = (await Auth.currentAuthenticatedUser()).username
        deliveryInfo = await getFormattedDeliveryInfo(userId)
		plan = await getPlanByCustomerId(userId)
    })
</script>

<div class="flex flex-col flex-grow h-full w-full">
        <div class="flex flex-col w-full p-4 justify-center">
			<h2 class="text-lg font-500 mt-8">Delivery Information</h2>
			<InfoCard leftSideGraphic="Two Columns" colContents={deliveryInfo} />

			<button on:click={() => goto('/delivery-info?redirect=confirm')} class="btn w-full mt-1">
				Edit Information
			</button>

			<h2 class="text-lg font-500 mt-8">Payment Method</h2>
			<PaymentForm bind:handleSubmit={handleSubmit} bind:processing={processing} />

			<h2 class="text-lg font-500 mt-8 mb-1">Selected Meal</h2>

			{#if $singleSelection !== null && $singleSelection !== undefined}
				{#await Storage.get($singleSelection.url) then image}
					<InfoCard leftSideGraphic="Text" leftSideText={weekDays[$selectedDay]} rightSideImage={image} stackCards>
						<div slot="header" class="text-grey font-500">
							{$singleSelection.name}
						</div>
					</InfoCard>
				{/await}
			{/if}
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
