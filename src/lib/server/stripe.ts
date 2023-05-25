import Stripe from 'stripe'
import { STRIPE_SECRET_KEY } from '$env/static/private'

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15'
})

export const createCustomer = async (details: {name: string, email: string, tel: string}) => {
    return await stripe.customers.create({
        name: details.name,
        email: details.email,
        phone: details.tel
    })
}