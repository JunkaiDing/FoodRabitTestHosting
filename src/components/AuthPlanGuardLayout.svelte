<script lang="ts">
    import {goto} from "$app/navigation";
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    import Spinner from "./Spinner.svelte";
    import {getPlanByCustomerId} from '../data/mockData'
    Amplify.configure(awsConfig)

    function toSelectPlan() {
        history.replaceState({}, '', '/')
        goto("/select-subscription")
    }

    function toLogIn() {
        history.replaceState({}, '', '/')
        goto("/sign-in")
    }
</script>

{#await Auth.currentAuthenticatedUser()}
    <div class="m-auto flex items-center font-bold text-lg">
        <div class="h-8 w-8 mr-2">
            <Spinner/>
        </div>
        Loading
    </div>
{:then user}
    {#await getPlanByCustomerId(user.username)}
        <div class="m-auto flex items-center font-bold text-lg">
            <div class="h-8 w-8 mr-2">
                <Spinner/>
            </div>
            Loading
        </div>
    {:then plan}
        {#if plan}
            <slot />
        {:else}
            {toSelectPlan()}
        {/if}
    {:catch}
        {toSelectPlan()}
    {/await}
{:catch}
    {toLogIn()}
{/await}