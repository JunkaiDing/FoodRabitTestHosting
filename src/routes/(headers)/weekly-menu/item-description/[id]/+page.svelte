<script lang='ts'>
    import { page } from '$app/stores';
    import {getFood, getRestaurant} from "../../../../../data/mockData";
    import type { Food, Restaurant } from "../../../../../data/Types";
    import {progress, selectedDay} from "../../../../../stores/stores";
    import {goto} from "$app/navigation";
    import ItemDescription from "../../../../../components/ItemDescription.svelte";
    import {weekSelection} from "../../../../../stores/stores";
	import { onMount } from 'svelte';
    import {Storage} from "aws-amplify";

    let item:Food|undefined, restaurant:Restaurant|undefined, foodImage:string, restaurantImage: string;

	onMount(async () => {
		item = await getFood($page.params.id);
        restaurant = await getRestaurant(item.restaurant);
        foodImage = await Storage.get(item.url);
        restaurantImage = await Storage.get(restaurant.url)
	});

    function orderMeal() {
        weekSelection.update(it => {
            let newList = [...it]
            newList[$selectedDay] = item
            return newList
        })
        goto("/weekly-menu")
    }
    progress.set(-1)
</script>

<ItemDescription {restaurant} {item} {foodImage} {restaurantImage} orderAction={orderMeal} />