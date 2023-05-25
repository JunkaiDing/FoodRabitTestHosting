/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createWeeklyMenu = /* GraphQL */ `
  mutation CreateWeeklyMenu(
    $input: CreateWeeklyMenuInput!
    $condition: ModelWeeklyMenuConditionInput
  ) {
    createWeeklyMenu(input: $input, condition: $condition) {
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
export const updateWeeklyMenu = /* GraphQL */ `
  mutation UpdateWeeklyMenu(
    $input: UpdateWeeklyMenuInput!
    $condition: ModelWeeklyMenuConditionInput
  ) {
    updateWeeklyMenu(input: $input, condition: $condition) {
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
export const deleteWeeklyMenu = /* GraphQL */ `
  mutation DeleteWeeklyMenu(
    $input: DeleteWeeklyMenuInput!
    $condition: ModelWeeklyMenuConditionInput
  ) {
    deleteWeeklyMenu(input: $input, condition: $condition) {
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
