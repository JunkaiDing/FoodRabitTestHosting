<script lang="ts">
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../aws-exports';
    import Spinner from "./Spinner.svelte";
    Amplify.configure(awsConfig)
</script>

{#await Auth.currentAuthenticatedUser().then(() => true).catch(() => false)}
    <div class="m-auto flex items-center font-bold text-lg">
        <div class="h-8 w-8 mr-2">
            <Spinner/>
        </div>
        Loading
    </div>
{:then auth}
    <slot isAuth={auth}/>
{/await}