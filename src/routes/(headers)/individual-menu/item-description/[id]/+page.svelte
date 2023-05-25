<script lang="ts">
	import { page } from '$app/stores';
	import { getFood, getRestaurant } from '../../../../../data/mockData';
    import type { Food, PlanType, Restaurant } from '../../../../../data/Types';
    import {headingSubTitle, headingTitle, progress, singleSelection} from '../../../../../stores/stores';
	import { goto } from '$app/navigation';
	import ItemDescription from '../../../../../components/ItemDescription.svelte';
	import { getPlanByCustomerId } from '../../../../../data/mockData'
	import { onMount } from 'svelte';
	import {Amplify, Auth, Storage} from "aws-amplify";
    import awsConfig from '../../../../../aws-exports';
    Amplify.configure(awsConfig)
	
	let item:Food|undefined, restaurant:Restaurant|undefined, foodImage:string, restaurantImage: string;
	let plan: PlanType|undefined
	let userId: string

	onMount(async () => {
		item = await getFood($page.params.id);
        restaurant = await getRestaurant(item.restaurant);
		foodImage = await Storage.get(item.url);
		restaurantImage = await Storage.get(restaurant.url)

		try {
			userId = (await Auth.currentAuthenticatedUser()).username
			plan = await getPlanByCustomerId(userId)
		} catch (e) {
			// not signed in
		}
		
	});

	function orderMeal() {
		singleSelection.set(item);
		if (!userId) {
			goto('/sign-in')
		} else {
			goto('/confirm-individual-order')
		}
	}
	progress.set(-1);
    headingTitle.set("")
    headingSubTitle.set("")
</script>

<ItemDescription {restaurant} {item} {foodImage} {restaurantImage} orderAction={orderMeal} />
