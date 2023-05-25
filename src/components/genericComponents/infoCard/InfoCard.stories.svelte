<script lang="ts">
    import InfoCard from './InfoCard.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Generic Components/Info Card"
    component={InfoCard}
    argTypes={{
        header: { control: 'text' },
        body: { control: 'text' },
        sideGraphic: {
            options: ['None', 'Text', 'Radio', 'Skeleton']
        },
        sideText: { control: 'text' },
        selection: { control: 'text' }
    }}
/>

<Template let:args>
    <InfoCard {... args}/>
</Template>

<Story name="Header and Body with Side Text" args={{
    header: 'Header 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    sideGraphic: 'Text',
    sideText: 'Th'
}} />

<Story name="Header and Body Only" args={{
    header: 'Header 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    sideGraphic: 'None'
}} />

<Story name="Header Only" args={{
    header: 'Lorem ipsum dolor amet',
    sideGraphic: 'None'
}} />

<Story name="Radio" args={{
    header: 'Lorem ipsum dolor amet',
    sideGraphic: 'Radio',
    selection: ''
}} />

<Story name="Skeleton" args={{
    sideGraphic: 'Skeleton'
}} />