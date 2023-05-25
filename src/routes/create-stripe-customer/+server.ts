import Stripe from 'stripe'
import { STRIPE_SECRET_KEY } from '$env/static/private'
import { stripe } from '$lib/server/stripe'

// const stripe = new Stripe(STRIPE_SECRET_KEY, {
//     apiVersion: '2022-11-15'
// })


export const POST = async ({ request }) => {

    const body = await request.json()
    const details: { name: string, email: string, tel: string } = body.details 

    const stripeCustomer =  await stripe.customers.create({
        name: details.name,
        email: details.email,
        phone: details.tel
    });

    const response = {
        stripeCustomer
    }
    return new Response(JSON.stringify(response))

}