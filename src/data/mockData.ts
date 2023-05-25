import type { Plan } from './Enums';
import type { Customer, Food, FormattedDeliveryInfo, PlanType, Restaurant } from './Types';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { getCustomer, getFood, getPlan, getRestaurant, getWeeklyMenu } from '../graphql/queries';
import { createFood, createRestaurant, updateCustomer } from '../graphql/mutations';
import awsConfig from '../aws-exports';
Amplify.configure(awsConfig);

export const CURRENT_MENU_ID = 0;

async function getCustomerById(id: string) {
	try {
		const response: any = await API.graphql(
			graphqlOperation(getCustomer, {
				id: id
			})
		);
		const data: Customer = response.data.getCustomer;
		return data;
	} catch (err) {
		console.log(err);
	}
}

async function getFormattedDeliveryInfoById(id: string) {
	try {
		const response: any = await API.graphql(
			graphqlOperation(getCustomer, {
				id: id
			})
		);
		const data: Customer = response.data.getCustomer;
		
		const deliveryInfo: FormattedDeliveryInfo = {
			'Name': data.name,
			'Email': data.email,
			'Phone Number': data.phone_number,
			'Address': data.address,
			'Apt, Suite, Unit, Building': data.unit,
			'Delivery Notes': data.delivery_notes
		}
		return deliveryInfo;
	} catch (err) {
		console.log(err);
	}
}

async function getFoodById(id: string) {
	try {
		const response: any = await API.graphql(
			graphqlOperation(getFood, {
				// input: {
				id: id
				// }
			})
		);
		const data = response.data.getFood;
		const result: Food = {
			id: id,
			name: data.name,
			desc: data.description,
			url: data.picture_location,
			restaurant: data.restaurant.id
		};
		return result;
	} catch (err) {
		console.log(err);
	}
	// return mockFoods.find((it) => it.id == id);
}

async function getPlanByCustomerId(userId: string) {
	try {
		const customer = await getCustomerById(userId)
		const planId = customer?.customerPlanId

		const response: any = await API.graphql(
			graphqlOperation(getPlan, {
				id: planId
			})
		);

		const plan: PlanType = response.data.getPlan
		return plan
	} catch (e) {
		console.log(e)
	}
}

async function getRestaurantById(name: string) {
	try {
		const response: any = await API.graphql(
			graphqlOperation(getRestaurant, {
				// input: {
				id: name
				// }
			})
		);
		const data = response.data.getRestaurant;
		const result: Restaurant = {
			id: name,
			name: data.name,
			desc: data.description,
			url: data.picture_location
		};
		return result;
	} catch (err) {
		console.log(err);
	}
	// return mockRestaurants.find((it) => it.id == name);
}

async function getMenuOfWeek() {
	try {
		const response: any = await API.graphql(
			graphqlOperation(getWeeklyMenu, {
				// input: {
				id: CURRENT_MENU_ID
				// }
			})
		);
		const result: Food[][] = [
			response.data.getWeeklyMenu.mon.items.map((i) => ({
				id: i.id,
				name: i.name,
				desc: i.description,
				url: i.picture_location,
				restaurant: i.restaurant.id
			})),
			response.data.getWeeklyMenu.tue.items.map((i) => ({
				id: i.id,
				name: i.name,
				desc: i.description,
				url: i.picture_location,
				restaurant: i.restaurant.id
			})),
			response.data.getWeeklyMenu.wed.items.map((i) => ({
				id: i.id,
				name: i.name,
				desc: i.description,
				url: i.picture_location,
				restaurant: i.restaurant.id
			})),
			response.data.getWeeklyMenu.thu.items.map((i) => ({
				id: i.id,
				name: i.name,
				desc: i.description,
				url: i.picture_location,
				restaurant: i.restaurant.id
			})),
			response.data.getWeeklyMenu.fri.items.map((i) => ({
				id: i.id,
				name: i.name,
				desc: i.description,
				url: i.picture_location,
				restaurant: i.restaurant.id
			})),
			[],
			[]
		];
		return result;
	} catch (err) {
		console.log(err);
	}
	//2 empty list represent the weekends. Please keep it here to make sure weekend the menu is empty
	// return [...currentWeeklyMenu, [], []];
}

function getPlanDetails(plan: Plan) {
	return Plans[plan];
}

async function setUserPlan(userId: string, planId: string) {
	try {
		const response: any = await API.graphql(
			graphqlOperation(updateCustomer, {
				input: {
					id: userId,
					customerPlanId: planId
				}
			})
		);

		return response
	} catch (e) {
		console.log(e)
	}
}

async function uploadRestaurant(
	id: string,
	name: string,
	description: string
	// restaurantPicLocalUrl: string
) {
	try {
		// upload restuarant pic to s3
		// const fetchres = await fetch(restaurantPicLocalUrl);
		// const imageData = await fetchres.blob();
		// let s3Res: any = await Storage.put(id, imageData, { contentType: 'image/png' });
		// console.log('s3res', s3Res);

		// create restaurant in db
		const response: any = await API.graphql(
			graphqlOperation(createRestaurant, {
				input: {
					id: id,
					name: name,
					...(description === null && { description: description }),
					picture_location: `s3://foodrabbitimagesbucket190557-dev/public/${id}`
				}
			})
		);
		const data = response.data.getRestaurant;
	} catch (err) {
		console.log(err);
	}
}

async function uploadFood(
	restaurantId: string,
	name: string,
	description: string,
	pictureLocation: string
) {
	try {
		// create restaurant in db
		const response: any = await API.graphql(
			graphqlOperation(createFood, {
				input: {
					name: name,
					restaurantFoodsId: restaurantId,
					...(description ? { description: description } : {}),
					...(pictureLocation ? { picture_location: pictureLocation } : {})
				}
			})
		);
		const data = response.data.createFood;
	} catch (err) {
		console.log(err);
	}
}

const mockFoods: Food[] = [
	// thuday:
	// 19 11
	{
		id: '1',
		name: 'BBQ Chicken Bacon Pizza',
		desc: 'A creamy white garlic sauce base, sprinkled with fresh mozzarella and cheddar cheeses, grilled chicken breast, smoky bacon, and topped with a tangy BBQ sauce swirl',
		url: '/images/bbq_chicken_bacon_pizza.png',
		restaurant: 'fresh_slice'
	},
	{
		id: '2',
		name: 'Butter Chicken Pizza',
		desc: 'A creamy white garlic sauce base, topped with fresh mozzarella and cheddar cheeses, grilled chicken breast, red peppers and finished with a authentic butter chicken sauce drizzle',
		url: '/images/butter_chicken_pizza.png',
		restaurant: 'fresh_slice'
	},
	{
		id: '3',
		name: 'Combo Feast',
		desc: 'A zesty tomato sauce base, topped with fresh mozzarella cheese, green peppers, red onions, mushrooms, pepperoni and sausage',
		url: '/images/combo_pizza.png',
		restaurant: 'fresh_slice'
	},
	{
		id: '4',
		name: "Jimmy's Steamed Mussels",
		desc: 'Fresh mussels cooked in fresh herb, julienned vegetables, butter, shallots, lime and white wine',
		url: '/images/mussels.png',
		restaurant: 'bella_roma'
	},
	{
		id: '5',
		name: 'Straciatella',
		desc: 'Light chicken broth with egg',
		url: '/images/straciatella.png',
		restaurant: 'bella_roma'
	},
	{
		id: '6',
		name: 'Classico calzones',
		desc: 'Mozzarella,baking cheese, salami, ham and fresh tomato. Folded thin crust pizza baked in our brick oven.',
		url: '/images/calzone.png',
		restaurant: 'bella_roma'
	},
	{
		id: '7',
		name: '2 Pc Burger Steak w/ 1 Side',
		desc: '2 Savory sweet beef burger patties smothered with mushroom gravy, best paired with rice',
		url: '/images/burger_steak.png',
		restaurant: 'jollibee'
	},
	{
		id: '8',
		name: 'Spicy Chicken Sandwich',
		desc: 'Our Spicy Chicken Sandwich starts with a crispy juicy hand-breaded chicken breast fillet, spread with sriracha mayo and served with fresh jalapenos on a toasted brioche bun',
		url: '/images/spicy_chicken_sandwich.png',
		restaurant: 'jollibee'
	},
	{
		id: '9',
		name: 'Palabok Fiesta Family Pack',
		desc: 'A Family Pack of our signature Palabok Fiesta noodles. Serves 3-5. Note: Palabok sauce contains shrimp and pork that cannot be removed',
		url: '/images/palabok.png',
		restaurant: 'jollibee'
	},
	{
		id: '10',
		name: 'Chicken Katsu Rice Burger',
		desc: 'Our most popular burger! Hand-breaded crispy fried chicken drizzled in our House Teri and Japanese Mayo',
		url: '/images/chicken_katsu_rice_burger.png',
		restaurant: 'rice_burger'
	},
	{
		id: '11',
		name: 'Korean Spicy Pork Rice Burger',
		desc: 'Sweet, Smoky, Spicy. Pork marinated in our signature House Hot that gives the perfect kick. Not too hot, but the heat will build!',
		url: '/images/korean_spicy_pork_rice_burger.png',
		restaurant: 'rice_burger'
	}
];

const mockRestaurants: Restaurant[] = [
	{
		id: 'fresh_slice',
		name: 'Fresh Slice',
		desc: 'Freshslice Pizza is a Canadian pizza chain and franchise founded by Ray Russell in 1999. The franchise owns 77 branches across Canada. They are known for their pizza by the slice.',
		url: '/images/fresh_slice.png'
	},
	{
		id: 'bella_roma',
		name: 'Bella Roma',
		desc: 'Bella Roma Pizzeria & Ristorante. Our extraordinarily talented "king of the kitchen" excels tremendously in showcasing a variety of cooking styles.',
		url: '/images/bella_roma.png'
	},
	{
		id: 'rice_burger',
		name: 'Rice Burger',
		desc: 'The concept of rice burgers originated from Japan. After its introduction, it exploded in popularity across Asia as an alternative to traditional hamburgers. We, at Rice Burger, are excited to share with you our take on this Japanese classic!',
		url: '/images/rice_burger.png'
	},
	{
		id: 'jollibee',
		name: 'Jollibee',
		desc: 'Jollibee is the flagship brand of Jollibee Foods Corporation, the largest and fastest growing Asian restaurant company in the world. With 70 stores in North America, 1300 stores across the globe and many more yet to come, our mission is to spread the joy of eating.',
		url: '/images/jollibee.png'
	}
];

const currentWeeklyMenu = [
	[
		mockFoods[0],
		mockFoods[1],
		mockFoods[3],
		mockFoods[4],
		mockFoods[5],
		mockFoods[6],
		mockFoods[8]
	],
	[
		mockFoods[3],
		mockFoods[4],
		mockFoods[5],
		mockFoods[6],
		mockFoods[7],
		mockFoods[8],
		mockFoods[9],
		mockFoods[10]
	],
	[
		mockFoods[0],
		mockFoods[1],
		mockFoods[2],
		mockFoods[3],
		mockFoods[8],
		mockFoods[9],
		mockFoods[10]
	],
	[mockFoods[0], mockFoods[8], mockFoods[10]],
	[
		mockFoods[0],
		mockFoods[1],
		mockFoods[2],
		mockFoods[3],
		mockFoods[4],
		mockFoods[5],
		mockFoods[6],
		mockFoods[7],
		mockFoods[8],
		mockFoods[9],
		mockFoods[10]
	]
];

const Plans = {
	oneTime: {
		credits: 1,
		days: 1
	},
	weekly: {
		credits: 5,
		days: 14
	},
	monthly: {
		credits: 20,
		days: 44
	},
	termly: {
		credits: 60,
		days: 122
	}
};
export {
	getCustomerById as getCustomer,
	getFormattedDeliveryInfoById as getFormattedDeliveryInfo,
	getFoodById as getFood,
	getPlanByCustomerId,
	getRestaurantById as getRestaurant,
	getMenuOfWeek as getWeeklyMenu,
	setUserPlan,
	uploadFood,
	uploadRestaurant,
	getPlanDetails
};
