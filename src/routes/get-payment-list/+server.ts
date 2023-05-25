import { stripe } from '$lib/server/stripe'

export const POST = async ({request}) => {

    const body = await request.json()
    const customerId = body.id

    const paymentMethods = await stripe.paymentMethods.list({
        customer: customerId,
        type: 'card',
    });


    // return the clientSecret to the client
    const response = {
        paymentMethods: paymentMethods
    }
    return new Response(JSON.stringify(response))
}
