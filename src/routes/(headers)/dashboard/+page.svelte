<script lang="ts">
  	import Footer from '../../../components/Footer.svelte';
	import ProgressCircle from '../../../components/ProgressCircle.svelte';
	import InfoCard from '../../../components/genericComponents/infoCard/InfoCard.svelte';
	import {headingSubTitle, headingTitle, progress, weekSelection} from '../../../stores/stores';
	import type {FormattedDeliveryInfo, PlanType} from '../../../data/Types'
	import {Plan} from '../../../data/Enums'
	import {  getFormattedDeliveryInfo, getPlanByCustomerId, getPlanDetails } from '../../../data/mockData';
	import { getCustomer } from '../../../graphql/queries';
	import { goto } from "$app/navigation";
	import { onMount } from 'svelte';
	import {Amplify, Auth, Storage, API, graphqlOperation} from "aws-amplify";
    import awsConfig from '../../../aws-exports';
    Amplify.configure(awsConfig)

	let deliveryInfo: FormattedDeliveryInfo|undefined
	let plan: PlanType|undefined|null

	const weekDays = ['M', 'Tu', 'W', 'Th', 'F']

	let startDate: string
	let expiryDate: string

    let approxArrivalTime = "5-7pm"
	let totalCredits: number

	let emptyOrder = false
	let orders=[]

	headingTitle.set("My Account")
	headingSubTitle.set("")
	progress.set(-1)

	onMount(async () => {
		const id = (await Auth.currentAuthenticatedUser()).username;
		deliveryInfo = await getFormattedDeliveryInfo(id)
		plan = await getPlanByCustomerId(id)

		if (plan) {
			let planDetails = getPlanDetails(plan.type)
			totalCredits = planDetails.credits
			startDate = new Date(plan.start_date).toLocaleDateString(undefined, {weekday: 'long', month:"long", day:"numeric"})
			expiryDate = new Date(plan.expiry_date).toLocaleDateString(undefined, {weekday: 'long', month:"long", day:"numeric"})
		} else {
			plan = null
		}
		emptyOrder = $weekSelection.filter((food) => food !== null).length === 0

		let getCustomerResponse=await API.graphql(
            graphqlOperation(getCustomer, {
                // input: {
					id:id
				// }
            })
        );
		console.log('getCustomerResponse',getCustomerResponse)
		orders = getCustomerResponse.data.getCustomer.orders.items
		.map((o) => ({
			food: o.food.name,
			date: o.date,
			url: o.food.picture_location,
		}))
		.sort((a: any, b: any) => {
			const dateA: Date = new Date(a.date);
			const dateB: Date = new Date(b.date);

			return dateA.getTime() - dateB.getTime();
		});
		console.log('orders',orders)
	})

	// TODO: add skeleton for delivery info
</script>

<!-- <Heading title="My Account" /> -->

<div class="flex flex-col items-center p-4 w-full">
	<h2 class="text-xl font-bold my-4">Current Plan</h2>
	{#if plan}
		<div class="bg-white rounded-md shadow-md my-1 p-3 w-full">
			<div class="flex items-center justify-center">
				<div class="flex flex-col w-[50%]">
					<h3 class="text-xl font-500 mb-4">
						{#if plan.type === Plan.weekly}
							Weekly
						{:else if plan.type === Plan.monthly}
							Monthly
						{:else if plan.type === Plan.term}
							Term
						{:else}
							No plan added
						{/if}
					</h3>
					<p class="font-450">Started on</p>
					<p>{startDate}</p>
				</div>
				<div class="flex flex-grow justify-end max-h-45">
					<ProgressCircle mealCreditsRemaining={plan.remaining_credits} totalMealCredits={totalCredits} />
				</div>
			</div>
			<p class="font-500 text-sm mt-4 text-center">All meals and credits will expire on {expiryDate}</p>
		</div>
	{:else}
		<p class="text-sm text-grey italic">No plan selected. Add a plan to start saving!</p>
		<div class="flex flex-col gap-y-1.5 my-3 w-full">
			<button class="btn" on:click={() => goto('/select-subscription')}>Select a Plan</button>
		</div>
	{/if}

	<h2 class="text-xl font-bold mt-8 mb-4">Delivery Information</h2>
	{#if deliveryInfo}
		<InfoCard leftSideGraphic="Two Columns" colContents={deliveryInfo} />
		<button on:click={() => goto('/delivery-info')} class="btn my-2 w-full">Edit Preferences</button>
	{/if}

	<h2 class="text-xl font-bold mt-8 mb-4">Upcoming Meals</h2>
	{#if emptyOrder}
		<p class="text-sm text-grey italic">No food selected. Start adding meals now!</p>
	{:else}
		{#each orders as order, i}
			{#if order !== null && order !== undefined}
				{#await Storage.get(order.url) then image}
					<InfoCard leftSideGraphic="Text" leftSideText={weekDays[new Date(order.date).getDay()-1]} rightSideImage={image}
								stackCards underhang>
						<div slot="header" class="text-grey font-500">
							{order.food}
						</div>
						<div slot="underhang">
							<p class="font-500 mb-2">Meal can no longer be edited</p>
							<p>Arriving on</p>
							<p>{weekDays[new Date(order.date).getDay()-1]} at {approxArrivalTime}</p>
						</div>
					</InfoCard>
				{/await}
			{/if}
		{/each}
	{/if}
	<button on:click={() => goto('/weekly-menu')} class="btn my-2 w-full">{emptyOrder ? "Add Meals" : "Edit Meals"}</button>
</div>

<Footer />
