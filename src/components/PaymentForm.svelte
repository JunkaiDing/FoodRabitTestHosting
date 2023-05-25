<script lang="ts">
    import InfoCard from './genericComponents/infoCard/InfoCard.svelte'
    import PaymentElement from '../stories/checkout/stripe/PaymentElement.svelte'
    import { getSavedCards, createPaymentIntent, clientStripe, submitNewCardPayment, submitExistingCardPayment } from '../data/Stripe'
    import type {StripeError, StripeCardElement} from '@stripe/stripe-js'
    import { goto } from "$app/navigation"
	import { onMount } from "svelte";
    import type Stripe from 'stripe'
    import { getCustomer } from '../data/mockData'
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    Amplify.configure(awsConfig)

    let cardElement: StripeCardElement
    let name:string|undefined
    let savePayment:boolean
    let ccError:StripeError|null = null
    let clientSecret:string
    export let processing = false;
    let selectedRadio = ''
    let selectionError:string|undefined
    let firstSubmit = false

    let paymentMethods: Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>

    onMount(async () => {
        let id: string
        try {
            id = (await Auth.currentAuthenticatedUser()).username;
        } catch (e) {
            id = ''
        }
        let customer = await getCustomer(id);
        let stripeId = customer ? customer.stripe_id : ""
        
        clientSecret = await createPaymentIntent(stripeId);
        paymentMethods = await getSavedCards(stripeId);
        
    })

    export async function handleSubmit() {
        firstSubmit = true
        if (processing) return

        processing = true
        if(selectedRadio == "other" || (paymentMethods && paymentMethods.data.length == 0)) {
            if(name == '') {
                processing = false
            }
            else {
                try {
                    const response = await submitNewCardPayment(clientSecret, cardElement, name, savePayment)
                    processing = false
                    return response
                } catch (e) {
                    ccError = e
                    processing = false
                    throw e
                }
            }
        } else if(selectedRadio == "") {
            selectionError = "No payment method selected."
            processing = false
            throw selectionError
        } else {
            try {
                const response = await submitExistingCardPayment(clientSecret, paymentMethods.data[parseInt(selectedRadio)].id)
                processing = false
                return response
            } catch (e) {
                selectionError = e.message
                processing = false
                throw e
            }
        }
    }

    $: if(selectedRadio != '') selectionError = undefined
</script>


<div class="flex flex-col items-center flex-grow">

    <div class="flex flex-col w-full h-full pt-4">
        {#if clientStripe && paymentMethods && paymentMethods.data.length > 0}
            {#if selectionError}
                <p class="text-sm text-red-500">{selectionError} Please try again.</p>
            {/if}

            {#each paymentMethods.data as card, i}
                {#if card.card}
                    <InfoCard leftSideGraphic="Radio" value="{i.toString()}" bind:selection={selectedRadio}>
                        <div slot="header">
                            {card.card.brand.charAt(0).toUpperCase() + card.card.brand.slice(1)} ending in {card.card.last4}
                        </div>
                    </InfoCard>
                {/if}
            {/each}
            
            <InfoCard leftSideGraphic="Radio" value="other" bind:selection={selectedRadio}>
                <div slot="header">
                    Other Payment Method
                </div>
            </InfoCard>
            <!-- janky workaround for keeping the PaymentElement loaded -->
            <div class={selectedRadio === "other" ?
                        "relative w-full rounded-lg py-2 bg-topaz -mt-2" :
                        "hidden"}>
                <PaymentElement bind:cardElement={cardElement}
                                bind:name={name}
                                bind:savePayment={savePayment}
                                bind:processing={processing}
                                firstSubmit={firstSubmit}
                                error={ccError}
                                stripe={clientStripe}/>   
            </div>

        {:else if clientStripe && paymentMethods && paymentMethods.data.length === 0}
            
            <div class="bg-topaz rounded-md shadow-md my-1 p-3 w-full">
                <PaymentElement bind:cardElement={cardElement}
                                bind:name={name}
                                bind:savePayment={savePayment}
                                bind:processing={processing}
                                firstSubmit={firstSubmit}
                                error={ccError}
                                stripe={clientStripe}/>
            </div>
        {:else}
            <InfoCard leftSideGraphic="Skeleton" />
            <InfoCard leftSideGraphic="Skeleton" />
        {/if}
    </div>
</div>