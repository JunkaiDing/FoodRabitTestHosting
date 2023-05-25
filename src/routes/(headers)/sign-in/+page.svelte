<script lang="ts">
	import Field from '../../../components/genericComponents/form/Field.svelte';
	import {headingSubTitle, headingTitle, progress} from '../../../stores/stores';
	import { goto } from '$app/navigation';
	import { Amplify, Auth } from 'aws-amplify';
	import awsConfig from '../../../aws-exports';
	import Spinner from "../../../components/Spinner.svelte";
	Amplify.configure(awsConfig);

	const individual = false
	let firstSubmit = false
	let loading = false

	const userInfo: {
		email: string | undefined;
		password: string | undefined;
	} = {
		email: '',
		password: ''
	};

	const handleContinueWithoutAcct = () => {
		return;
	};
	const handleSignIn = async () => {

		firstSubmit = true
		if (userInfo.email && userInfo.password) {
			loading = true
			try {
				await Auth.signIn(userInfo.email, userInfo.password);
				goto('/');
			} catch (err) {
				alert(err.message)
			} finally {
				loading = false
			}
		}
	};


	headingTitle.set("Sign In")
	headingSubTitle.set("Please create an account or sign in so that you can keep track of your plans and meals with us.")
	progress.set(-1)
</script>

<form class="flex flex-col flex-grow h-full w-full px-4 pb-4" on:submit|preventDefault={handleSignIn} novalidate>
        <div class="gap-2 flex flex-col">
            <Field bind:value={userInfo.email} fieldProps={{name: "Email", placeholder: "Enter your email"}}
                   type="email" firstSubmit={firstSubmit} required />

			<Field
				bind:value={userInfo.password}
				fieldProps={{ name: 'Password', placeholder: 'Enter your password' }}
				type="password"
				firstSubmit={firstSubmit} required />
		</div>
		<div class="space-y-2 flex-grow flex flex-col justify-end w-full pb-2 pt-2">
			{#if individual}
				<button on:click={handleContinueWithoutAcct} class="btn-secondary w-full">
					Continue Without Account
				</button>
			{/if}
			<button on:click={() => goto("/sign-up")} type="button" class="btn-secondary w-full"> Become a Member </button>
			<button type="submit" class="flex justify-center btn w-full" disabled={loading}>
				{#if loading}
					<div class="h-6 w-6 mr-2">
						<Spinner/>
					</div>
				{/if}
				Sign In
			</button>
		</div>
	</form>
