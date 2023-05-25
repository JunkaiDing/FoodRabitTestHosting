<script>
    export let hasText = false
    const companyName = "Food Rabbit"
</script>


<div class="flex justify-center mb-2">
    <img src="/images/logo.png" alt="logo" width="48"/>
    {#if hasText}
        <h1 class="font-bold my-auto ml-2 text-2xl">{companyName}</h1>
    {/if}
</div>