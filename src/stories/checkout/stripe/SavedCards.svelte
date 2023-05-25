<script lang="ts">
	import type Stripe from "stripe";
	import { onMount } from "svelte";

    let selectedCard: string
    $: console.log(selectedCard)

    let paymentMethods: Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>

    async function getSavedCards() {
        const response = await fetch('http://localhost:5173/get-payment-list', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
        const { paymentMethods } = await response.json()

        return paymentMethods
    }

    onMount(async () => {
        paymentMethods = await getSavedCards()
        console.log(paymentMethods)
    })
</script>

<div class="flex flex-col">
    {#if paymentMethods}
        {#each paymentMethods.data as card}
            {#if card.card}
                <div class="p-2">
                    <label class="border-1 border-gray-500 border-solid rounded p-2">
                        <input class="accent-red-500" type=radio bind:group={selectedCard} name={card.card.last4} value={card.id}>
                        <span class="text-neutral-600">
                            {card.card.brand.charAt(0).toUpperCase() + card.card.brand.slice(1)} ending with {card.card.last4}
                        </span>
                    </label>
                </div>
                
            {/if}
        {/each}
    {/if}
</div>