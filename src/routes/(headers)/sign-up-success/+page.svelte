<script lang="ts">
    import {headingSubTitle, headingTitle, progress} from "../../../stores/stores";
    import {goto} from '$app/navigation'

    const handleReturnHome = () => {
        goto("/")
    }
    const handleViewAcct = () => {
        goto("/dashboard")
    }


    headingTitle.set("Account has been created successfully!")
    headingSubTitle.set("")
    progress.set(-1);
</script>

<div class="flex flex-col flex-grow justify-center items-center">
    <img src="/images/sign-up-success.svg" alt="" width="300">
</div>

<div class="flex flex-col flex-grow justify-end w-full p-4 space-y-2">
    <button on:click={handleReturnHome} class="btn-secondary w-full">
        Return Home
    </button>
    <button on:click={handleViewAcct} class="btn w-full">
        View Account
    </button>
</div>

