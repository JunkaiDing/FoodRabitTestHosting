export async function createStripeCustomer(details: { name: string, email: string, tel: string }) {
    const response = await fetch('http://localhost:5174/create-stripe-customer', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ details })
    })
    const {stripeCustomer} = await response.json()

    return stripeCustomer
}