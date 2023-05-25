<script lang="ts">
    import PaymentElement from './PaymentElement.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Checkout/Stripe/Payment Element"
    component={PaymentElement}
    argTypes={{
        
    }}
/>

<Template let:args>
    <PaymentElement {... args}/>
</Template>

<Story name="Default" args={{
    storybook: true
    }} />