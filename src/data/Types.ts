import type { Plan } from "./Enums"

type DeliveryInfo = {
    name: string | undefined,
    email: string | undefined,
    password?: string | undefined,
    tel: string | undefined,
    address: string | undefined,
    unit: string | undefined,
    notes: string | undefined
}

type FormattedDeliveryInfo = {
    'Name': string,
    'Email': string,
    'Phone Number': string,
    'Address': string,
    'Apt, Suite, Unit, Building': string,
    'Delivery Notes': string
};

type Customer = {
    id: string,
    name: string,
    email: string,
    phone_number: string,
    address: string,
    unit: string,
    stripe_id: string,
    delivery_notes: string,
    orders: {
        items: [],
        nextToken: string
    },
    plan: Plan,
    createdAt: string,
    updatedAt: string,
    customerPlanId: string
}

type Food = { id: string, name: string, desc: string, url: string, restaurant: string }

type PlanType = {
    id: string,
    type: Plan,
    remaining_credits: number,
    start_date: string,
    expiry_date: string,
    createdAt: string,
    updatedAt: string
}

type Restaurant = { id: string, name: string, desc: string, url: string }

export type { Customer, DeliveryInfo, FormattedDeliveryInfo, Food, PlanType, Restaurant }