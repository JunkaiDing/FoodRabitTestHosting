/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
	query GetRestaurant($id: ID!) {
		getRestaurant(id: $id) {
			id
			name
			description
			picture_location
			foods {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`;
export const listRestaurants = /* GraphQL */ `
	query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
		listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				picture_location
				foods {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const getFood = /* GraphQL */ `
	query GetFood($id: ID!) {
		getFood(id: $id) {
			id
			name
			description
			restaurant {
				id
				name
				description
				picture_location
				foods {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				createdAt
				updatedAt
			}
			picture_location
			orders {
				items {
					id
					food {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					fulfilled
					customer {
						id
						name
						email
						phone_number
						address
						unit
						stripe_id
						delivery_notes
						createdAt
						updatedAt
						customerPlanId
					}
					address
					unit
					delivery_notes
					createdAt
					updatedAt
					foodOrdersId
					customerOrdersId
				}
				nextToken
			}
			createdAt
			updatedAt
			restaurantFoodsId
			weeklyMenuMonId
			weeklyMenuTueId
			weeklyMenuWedId
			weeklyMenuThuId
			weeklyMenuFriId
		}
	}
`;
export const listFoods = /* GraphQL */ `
	query ListFoods($filter: ModelFoodFilterInput, $limit: Int, $nextToken: String) {
		listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				restaurant {
					id
					name
					description
					picture_location
					foods {
						nextToken
					}
					createdAt
					updatedAt
				}
				picture_location
				orders {
					items {
						id
						fulfilled
						address
						unit
						delivery_notes
						createdAt
						updatedAt
						foodOrdersId
						customerOrdersId
					}
					nextToken
				}
				createdAt
				updatedAt
				restaurantFoodsId
				weeklyMenuMonId
				weeklyMenuTueId
				weeklyMenuWedId
				weeklyMenuThuId
				weeklyMenuFriId
			}
			nextToken
		}
	}
`;
export const getOrder = /* GraphQL */ `
	query GetOrder($id: ID!) {
		getOrder(id: $id) {
			id
			food {
				id
				name
				description
				restaurant {
					id
					name
					description
					picture_location
					foods {
						nextToken
					}
					createdAt
					updatedAt
				}
				picture_location
				orders {
					items {
						id
						fulfilled
						address
						unit
						delivery_notes
						createdAt
						updatedAt
						foodOrdersId
						customerOrdersId
					}
					nextToken
				}
				createdAt
				updatedAt
				restaurantFoodsId
				weeklyMenuMonId
				weeklyMenuTueId
				weeklyMenuWedId
				weeklyMenuThuId
				weeklyMenuFriId
			}
			fulfilled
			customer {
				id
				name
				email
				phone_number
				address
				unit
				stripe_id
				delivery_notes
				orders {
					items {
						id
						fulfilled
						address
						unit
						delivery_notes
						createdAt
						updatedAt
						foodOrdersId
						customerOrdersId
					}
					nextToken
				}
				plan {
					id
					type
					remaining_credits
					start_date
					expiry_date
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
				customerPlanId
			}
			address
			unit
			delivery_notes
			createdAt
			updatedAt
			foodOrdersId
			customerOrdersId
		}
	}
`;
export const listOrders = /* GraphQL */ `
	query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
		listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				food {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				fulfilled
				customer {
					id
					name
					email
					phone_number
					address
					unit
					stripe_id
					delivery_notes
					orders {
						nextToken
					}
					plan {
						id
						type
						remaining_credits
						start_date
						expiry_date
						createdAt
						updatedAt
					}
					createdAt
					updatedAt
					customerPlanId
				}
				address
				unit
				delivery_notes
				createdAt
				updatedAt
				foodOrdersId
				customerOrdersId
			}
			nextToken
		}
	}
`;
export const getCustomer = /* GraphQL */ `
	query GetCustomer($id: ID!) {
		getCustomer(id: $id) {
			id
			name
			email
			phone_number
			address
			unit
			stripe_id
			delivery_notes
			orders {
				items {
					id
					food {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					fulfilled
					date
					customer {
						id
						name
						email
						phone_number
						address
						unit
						stripe_id
						delivery_notes
						createdAt
						updatedAt
						customerPlanId
					}
					address
					unit
					delivery_notes
					createdAt
					updatedAt
					foodOrdersId
					customerOrdersId
				}
				nextToken
			}
			plan {
				id
				type
				remaining_credits
				start_date
				expiry_date
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
			customerPlanId
		}
	}
`;
export const listCustomers = /* GraphQL */ `
	query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
		listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				email
				phone_number
				address
				unit
				stripe_id
				delivery_notes
				orders {
					items {
						id
						fulfilled
						address
						unit
						delivery_notes
						createdAt
						updatedAt
						foodOrdersId
						customerOrdersId
					}
					nextToken
				}
				plan {
					id
					type
					remaining_credits
					start_date
					expiry_date
					createdAt
					updatedAt
				}
				createdAt
				updatedAt
				customerPlanId
			}
			nextToken
		}
	}
`;
export const getPlan = /* GraphQL */ `
	query GetPlan($id: ID!) {
		getPlan(id: $id) {
			id
			type
			remaining_credits
			start_date
			expiry_date
			createdAt
			updatedAt
		}
	}
`;
export const listPlans = /* GraphQL */ `
	query ListPlans($filter: ModelPlanFilterInput, $limit: Int, $nextToken: String) {
		listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				type
				remaining_credits
				start_date
				expiry_date
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const getWeeklyMenu = /* GraphQL */ `
	query GetWeeklyMenu($id: ID!) {
		getWeeklyMenu(id: $id) {
			mon {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			tue {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			wed {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			thu {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			fri {
				items {
					id
					name
					description
					restaurant {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
					}
					picture_location
					orders {
						nextToken
					}
					createdAt
					updatedAt
					restaurantFoodsId
					weeklyMenuMonId
					weeklyMenuTueId
					weeklyMenuWedId
					weeklyMenuThuId
					weeklyMenuFriId
				}
				nextToken
			}
			id
			createdAt
			updatedAt
		}
	}
`;
export const listWeeklyMenus = /* GraphQL */ `
	query ListWeeklyMenus($filter: ModelWeeklyMenuFilterInput, $limit: Int, $nextToken: String) {
		listWeeklyMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				mon {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				tue {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				wed {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				thu {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				fri {
					items {
						id
						name
						description
						picture_location
						createdAt
						updatedAt
						restaurantFoodsId
						weeklyMenuMonId
						weeklyMenuTueId
						weeklyMenuWedId
						weeklyMenuThuId
						weeklyMenuFriId
					}
					nextToken
				}
				id
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
