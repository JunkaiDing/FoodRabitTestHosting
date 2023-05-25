<script lang="ts">
    import DeliveryForm from '../../../components/DeliveryForm.svelte'
    import type {DeliveryInfo} from "../../../data/Types";
    import {progress, headingTitle, headingSubTitle} from '../../../stores/stores'
    import {goto} from "$app/navigation"
    import {Amplify, API, Auth, graphqlOperation} from 'aws-amplify';
    import {updateCustomer} from '../../../graphql/mutations'
    import awsConfig from '../../../aws-exports';
    import { onMount } from 'svelte';
    import { page } from '$app/stores'
	import { getCustomer } from '../../../data/mockData';

    Amplify.configure(awsConfig);

    let redirectParam = $page.url.searchParams.get("redirect")
    let redirect = redirectParam === "payment" ? "/payment-select" :
                    redirectParam === "confirm" ? "confirm-order" : "/dashboard"

    const handleSubmit = async (userInfo: DeliveryInfo) => {
        try {
            let response: any = await API.graphql(
                graphqlOperation(updateCustomer, {
                    input: {
                        id: (await Auth.currentAuthenticatedUser()).username,
                        name: userInfo.name,
                        email: userInfo.email,
                        phone_number: userInfo.tel,
                        address: userInfo.address,
                        unit: userInfo.unit,
                        delivery_notes: userInfo.notes
                    }
                })
            );
            let data = response.data.updateCustomer;
            console.log(data);
        } catch (err) {
            console.log(err);
        }
        goto(redirect)
    }

    progress.set(2)
    let deliveryInfo: DeliveryInfo | null;
    
    onMount(async () => {
        let id: string;
        try {
            id = (await Auth.currentAuthenticatedUser()).username;
        } catch(e) {
            id = "";
        }

        headingTitle.set("Change Delivery Information")
        headingSubTitle.set("Please fill in the information below to let us know where to deliver the meals.")
        const customer = await getCustomer(id);
        if (customer) {
            deliveryInfo = {
                name: customer.name,
                email: customer.email,
                tel: customer.phone_number,
                address: customer.address,
                unit: customer.unit,
                notes: customer.delivery_notes
            }
        } else {
            deliveryInfo = {
                name: '',
                email: '',
                password: undefined,
                tel: '',
                address: '',
                unit: '',
                notes: ''
            }
        }
	})

</script>

{#if deliveryInfo}
    <DeliveryForm userInfo={deliveryInfo} submitText='Continue' handleSubmit={handleSubmit}/>
{/if}