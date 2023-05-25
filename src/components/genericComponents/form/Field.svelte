<script lang="ts">
    export let fieldProps = {
        name: "",
        placeholder: ""
    }
    export let doubleFieldProps = {
        name: "",
        placeholder: ""
    }
    export let value = ""
    export let doubleValue = ""
    export let required = true
    export let doubleRequired = false
    export let double = false
    export let type: 'email' | 'text' | 'password' | 'number' | 'tel' = 'text'
    export let firstSubmit = false
    const ref = (node: HTMLInputElement) => {
        node.type = type
    }

    $: topInputClass = `w-full ${required && firstSubmit ? "invalid:(!border-red-500 !placeholder-red-500 w-full)" : "!border-b-grey"} ${double ? "!rounded-b-none w-full" : ""} `

    $: botInputClass = `w-full !rounded-t-none !border-t-0 ${doubleRequired && firstSubmit ? "invalid:(!border-red-500 !placeholder-red-500)" : ""}`
</script>

<div class="py-2 w-full flex flex-col">
    
    <label for="{fieldProps.name}">{fieldProps.name}</label>
    <input class="{topInputClass}" id="{fieldProps.name}" bind:value={value} use:ref placeholder="{fieldProps.placeholder}" required={required} />
    {#if double}
        <input class="{botInputClass}" id="{doubleFieldProps.name}" bind:value={doubleValue} use:ref placeholder="{doubleFieldProps.placeholder}" required={doubleRequired} />
    {/if}

    {#if (!value && required) && (!doubleValue && doubleRequired) && firstSubmit}
        <p class="text-sm text-red-500">{fieldProps.name} and {doubleFieldProps.name} cannot be left blank.</p>
    {:else if !value && required && firstSubmit}
        <p class="text-sm text-red-500">{fieldProps.name} cannot be left blank.</p>
    {:else if !doubleValue && doubleRequired && firstSubmit}
        <p class="text-sm text-red-500">{doubleFieldProps.name} cannot be left blank.</p>
    {/if}
</div>