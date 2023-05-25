<script lang="ts">
    import Field from './Field.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Generic Components/Field"
    component={Field}
    argTypes={{
        fieldProps: { control: 'object' },
        doubleFieldProps: { control: 'object' },
        required: { control: 'boolean' },
        type: {
            options: ['email', 'text', 'password', 'number', 'text']
        },
        double: { control: 'boolean' }
    }}
/>

<Template let:args>
    <Field {... args}/>
</Template>

<Story name="Text" args={{
    fieldProps: {
        name: "Text",
        value: "",
        placeholder: "Enter text"
    },
    required: false,
    double: false,
    type: "text"
}} />

<Story name="Email" args={{
    fieldProps: {
        name: "Email",
        value: "",
        placeholder: "Enter email"
    },
    required: false,
    double: false,
    type: "email"
}} />

<Story name="Password" args={{
    fieldProps: {
        name: "Password",
        value: "",
        placeholder: "Enter your password"
    },
    required: false,
    double: false,
    type: "password"
}} />

<Story name="Telephone" args={{
    fieldProps: {
        name: "Telephone Number",
        value: "",
        placeholder: "Enter your phone number"
    },
    required: false,
    double: false,
    type: "tel"
}} />

<Story name="Double" args={{
    fieldProps: {
        name: "Delivery Address",
        value: "",
        placeholder: "Street address"
    },
    doubleFieldProps: {
        name: "Apt, Suite, Unit, Building",
        value: "",
        placeholder: "Apt, Suite, Unit, Building"
    },
    required: false,
    double: true,
    type: "text"
}} />