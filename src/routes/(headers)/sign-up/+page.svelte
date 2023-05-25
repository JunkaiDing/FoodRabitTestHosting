<script lang="ts">
	import DeliveryForm from '../../../components/DeliveryForm.svelte';
	import type { DeliveryInfo } from '../../../data/Types'
	import {headingSubTitle, headingTitle, progress} from '../../../stores/stores';
	import { createCustomer } from '../../../graphql/mutations';
	import { goto } from '$app/navigation';
	import { createStripeCustomer } from './stripe';
	import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
	import awsConfig from '../../../aws-exports';
	Amplify.configure(awsConfig);

	const handleSubmit = async (userInfo: DeliveryInfo) => {
		if (userInfo.email && userInfo.password && userInfo.name && userInfo.tel) {
			try {
				let cognitoResponse = await Auth.signUp({
					username: userInfo.email,
					password: userInfo.password,
					attributes: {
						email: userInfo.email
					},
					autoSignIn: {
						enabled: true,
					}
				});

				let stripeCustomer = await createStripeCustomer({name: userInfo.name, email: userInfo.email, tel: userInfo.tel});

				await API.graphql(
					graphqlOperation(createCustomer, {
						input: {
							id: cognitoResponse.userSub,
							name: userInfo.name,
							email: userInfo.email,
							phone_number: userInfo.tel,
							address: userInfo.address,
							unit: userInfo.unit,
							delivery_notes: userInfo.notes,
							stripe_id: stripeCustomer.id
						}
					})
				);
				
				goto('/sign-up-success');
			} catch (err) {
                alert(err.message)
			}
		}
		console.log(userInfo);
	};

	headingTitle.set("Become a member!")
	headingSubTitle.set("Please fill in the information below to save money and become a member today!")
    progress.set(-1);
</script>

<DeliveryForm submitText='Create Account' password {handleSubmit} />
