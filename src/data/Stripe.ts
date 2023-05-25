import type {StripeCardElement} from '@stripe/stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PUBLIC_STRIPE_PUBLIC_KEY } from '$env/static/public'

export const clientStripe = await loadStripe(PUBLIC_STRIPE_PUBLIC_KEY);

export async function getSavedCards(id: string) {
    const response = await fetch('http://localhost:5174/get-payment-list', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
    const { paymentMethods } = await response.json()

    return paymentMethods
}

export async function createPaymentIntent(id: string) {
    const response = await fetch('http://localhost:5174/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({id: id})
    })
    const { paymentIntent } = await response.json()
    const clientSecret = paymentIntent.client_secret

    return clientSecret
}

export async function submitNewCardPayment(clientSecret: string, paymentMethod: StripeCardElement, name?: string, savePayment?: boolean) {
    const result = await clientStripe?.confirmCardPayment(clientSecret, {
        payment_method: {
            card: paymentMethod,
            billing_details: {
                name
            }
        },
        setup_future_usage: savePayment ? "on_session" : undefined
    })

    if (result?.error) {
        throw result.error
    }

    return result
}

export async function submitExistingCardPayment(clientSecret: string, paymentMethod: string) {
    const result = await clientStripe?.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod
        })

        if (result?.error) {
            throw result.error
        }

    return result
}

