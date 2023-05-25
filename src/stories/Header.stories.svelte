<script lang="ts">
    import Header from '../components/header/Header.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Preferences & Payments/Header"
    component={Header}
    argTypes={{
        position: {
            options: [0, 1, 2, 3, 4]
        },
        title: { control: 'text' },
        subtitle: { control: 'text' }
    }}
/>

<Template let:args>
    <Header {... args}/>
</Template>

<Story name="Primary" args={{
    position: 3
}} />
