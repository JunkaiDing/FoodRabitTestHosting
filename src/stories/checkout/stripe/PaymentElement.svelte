<script lang="ts">
    import Field from '../../../components/genericComponents/form/Field.svelte'
    import { Elements, CardNumber, CardExpiry, CardCvc } from  'svelte-stripe'
    import type { Stripe, StripeError, StripeCardElement } from '@stripe/stripe-js'
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../../../aws-exports';
    Amplify.configure(awsConfig)

    export let stripe:Stripe|null = null

    export let name:string|undefined = ''

    export let error:StripeError|null = null
    export let cardElement: StripeCardElement
    export let firstSubmit = false

    export let savePayment = false
    
    export let processing = false

    const fieldStyle = {
        base: {
            fontSize: "1.05em",
            fontFamily: "Poppins, sans-serif"
        }
    }

    Amplify.configure(awsConfig)
</script>


{#if stripe}
    <Elements {stripe} fonts={[{cssSrc: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"}]}>
        <div class="flex flex-col w-full p-2 gap-2">
            {#if error}
                <p class="text-sm text-red-500">{error.message} Please try again.</p>
            {/if}

            <Field bind:value={name} fieldProps={{name: "Name", placeholder: "Enter your name on card"}}
                type="text" firstSubmit={firstSubmit} />
            
            <label class="inline-block" for="cardnumber">Card Number</label>
            <CardNumber bind:element={cardElement} classes={{ base: 'input' }} style={fieldStyle} placeholder="Enter your card number" disabled={processing} />
            
            <div class="flex flex-row space-x-4">
                <div class="flex-1 flex flex-col mr-2 space-y-2 max-w-1/3 min-w-20">
                    <label class="inline-block" for="cvc">CVC</label>
                    <CardCvc classes={{ base: 'input' }} style={fieldStyle} disabled={processing} />
                </div>
                <div class="flex-1 flex flex-col ml-2 space-y-2 max-w-1/2">
                    <label class="inline-block" for="exp-date">Expiration Date</label>
                    <CardExpiry classes={{ base: 'input' }} style={fieldStyle} disabled={processing} />
                </div>
            </div>
            {#await Auth.currentAuthenticatedUser() then auth}
                <label class="inline-block py-2">
                    <input class="align-middle" type="checkbox" name="save-payment" bind:checked={savePayment}>
                    <span class="ml-1 align-middle">Save my Payment Method</span>
                </label>
            {/await}
        </div>
    </Elements>
{/if}

<style>
    :global(.input) {
        @apply p-2 rounded-lg shadow border-1 border-solid border-gray-500 bg-white h-10 font-sans placeholder-gray-500;
    }
</style>