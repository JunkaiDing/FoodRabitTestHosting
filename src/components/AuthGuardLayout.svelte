<script lang="ts">
    import {goto} from "$app/navigation";
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    import Spinner from "./Spinner.svelte";
    Amplify.configure(awsConfig)

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
    <slot/>
    {:catch error}
    {toLogIn()}
{/await}