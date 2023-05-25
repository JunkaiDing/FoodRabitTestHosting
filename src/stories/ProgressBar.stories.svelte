<script lang="ts">
    import ProgressBar from './ProgressBar.svelte';
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Preferences & Payments/Progress Bar"
    component={ProgressBar}
    argTypes={{
        position: {
            options: [0, 1, 2, 3, 4]
        }
    }}
/>

<Template let:args>
    <ProgressBar {... args}/>
</Template>

<Story name="Step 0" args={{
    position: 0
}} />

<Story name="Step 1" args={{
    position: 1
}} />

<Story name="Step 2" args={{
    position: 2
}} />

<Story name="Step 3" args={{
    position: 3
}} />

<Story name="Step 4" args={{
    position: 4
}} />