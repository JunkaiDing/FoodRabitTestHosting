<script lang="ts">
    import Heading from '../../components/header/Heading.svelte'
    import InfoCard from "../../components/genericComponents/infoCard/InfoCard.svelte";
    import {progress, weekSelection, earliestAvailableDay} from '../../stores/stores';
	import {Amplify, Auth, Storage, API, graphqlOperation} from "aws-amplify";
	import { getCustomer } from '../../graphql/queries';
    import awsConfig from '../../aws-exports';
    Amplify.configure(awsConfig)

    //todo these are all mock data plus they are BROKE
    //todo maybe we can remove it if we don't how to fix it
    const order = $weekSelection[earliestAvailableDay]
    const orderDate = new Date("November 11, 2024")
    $: date = orderDate.toLocaleDateString(undefined, {weekday: 'long', month:"long", day:"numeric"})
    const approxArrivalTime = "5-7pm"
    import { goto } from "$app/navigation";
	import { onMount } from 'svelte';

    const handleReturnHome = () => {
        goto("/")
    }

    const handleViewAccount = () => {
        goto("/dashboard")
    }

    let orders=[];
	const weekDays = ['M', 'Tu', 'W', 'Th', 'F']

    onMount(async()=>{
		const id = (await Auth.currentAuthenticatedUser()).username;

        let getCustomerResponse=await API.graphql(
            graphqlOperation(getCustomer, {
                // input: {
					id:id
				// }
            })
        );

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

    progress.set(-1)
</script>

<Heading title="Order Has Been Placed"
         subtitle="Please check that the information below is correct and accurate." />

<div class="w-full bg-white flex justify-center">
    <img class="my-4" src="/images/order_graphic.png" alt="" width="200">
</div>

<div class="flex flex-col flex-grow w-full p-4 max-w-xl mx-auto">
    <h2 class="font-bold text-xl">Your Next Meal</h2>

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

    <div class="flex-grow flex flex-col justify-end w-full space-y-2">
        <button on:click={handleReturnHome} class="btn-secondary w-full">
            Return Home
        </button>
        <button on:click={handleViewAccount} class="btn w-full">
            View Account
        </button>
    </div>
</div>