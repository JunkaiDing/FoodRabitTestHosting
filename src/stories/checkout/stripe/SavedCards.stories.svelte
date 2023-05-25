<script lang="ts">
    import SavedCards from './SavedCards.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Checkout/Stripe/Saved Cards"
    component={SavedCards}
    argTypes={{
        
    }}
/>

<Template let:args>
    <SavedCards {... args}/>
</Template>

<Story name="Default" args={{
    }} />