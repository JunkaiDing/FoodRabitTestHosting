/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood($filter: ModelSubscriptionFoodFilterInput) {
    onCreateFood(filter: $filter) {
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
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood($filter: ModelSubscriptionFoodFilterInput) {
    onUpdateFood(filter: $filter) {
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
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood($filter: ModelSubscriptionFoodFilterInput) {
    onDeleteFood(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
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
export const onCreateWeeklyMenu = /* GraphQL */ `
  subscription OnCreateWeeklyMenu(
    $filter: ModelSubscriptionWeeklyMenuFilterInput
  ) {
    onCreateWeeklyMenu(filter: $filter) {
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
export const onUpdateWeeklyMenu = /* GraphQL */ `
  subscription OnUpdateWeeklyMenu(
    $filter: ModelSubscriptionWeeklyMenuFilterInput
  ) {
    onUpdateWeeklyMenu(filter: $filter) {
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
export const onDeleteWeeklyMenu = /* GraphQL */ `
  subscription OnDeleteWeeklyMenu(
    $filter: ModelSubscriptionWeeklyMenuFilterInput
  ) {
    onDeleteWeeklyMenu(filter: $filter) {
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
