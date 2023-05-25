import Stripe from 'stripe'
import { STRIPE_SECRET_KEY } from '$env/static/private'
import { stripe, createCustomer } from '$lib/server/stripe'
import type { RequestEvent } from './$types';

// const stripe = new Stripe(STRIPE_SECRET_KEY, {
//     apiVersion: '2022-11-15'
// })


export const POST = async ({request}) => {

    const body = await request.json()
    const stripeId = body.id

    const paymentIntent = await stripe.paymentIntents.create({
        customer: stripeId,
        amount: 2000,
        currency: 'cad',
        payment_method_types: ['card']
    })


    // return the clientSecret to the client
    const response = {
        paymentIntent
    }
    return new Response(JSON.stringify(response))

}