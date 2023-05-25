<script lang="ts">
    import InfoCard from '../../../components/genericComponents/infoCard/InfoCard.svelte'
    import {progress, headingTitle, headingSubTitle} from "../../../stores/stores";
    import { getFormattedDeliveryInfo } from '../../../data/mockData'
    import {Amplify, Auth} from "aws-amplify";
    import awsConfig from '../../../aws-exports';
    import { onMount } from 'svelte';
	import type { FormattedDeliveryInfo } from '../../../data/Types';
    Amplify.configure(awsConfig)

    const handleSubmit = () => {
        console.log(deliveryInfo)
    }

    const handleEditInfo = () => {
        // TODO: implement
        return
    }
    let deliveryInfo: FormattedDeliveryInfo|undefined

    progress.set(2)
    headingTitle.set("Confirm Delivery Information")
    headingSubTitle.set("Please make sure the delivery information below is correct.")

    onMount(async () => {
        const id = (await Auth.currentAuthenticatedUser()).username
        deliveryInfo = await getFormattedDeliveryInfo(id)
    })
</script>

<div class="flex flex-col items-center flex-grow w-full">
    {#if deliveryInfo}
        <div class="p-4 w-full">
            <InfoCard leftSideGraphic="Two Columns" colContents={deliveryInfo} />
        </div>
    {/if}


    <div class="flex-grow flex flex-col justify-end w-full p-4 space-y-2">
        <button on:click={handleEditInfo} class="btn-secondary w-full">
            Edit Information
        </button>
        <button on:click={handleSubmit} class="btn w-full">
            Confirm Delivery Information
        </button>
    </div>
</div>