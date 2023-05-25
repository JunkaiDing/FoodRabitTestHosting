<script>
    import {COMPANY_NAME, SLOGAN} from "../../data/Constants";
    import SideMenu from '../../components/SideMenu.svelte';
    import {Auth, Amplify} from "aws-amplify";
	import awsConfig from '../../aws-exports'
	import {getPlanByCustomerId} from '../../data/mockData'
	import { onMount } from "svelte";
    Amplify.configure(awsConfig)
    let isLoggedIn = false
	let planExists = false

    let sideMenu = false;

    onMount(async () => {
		try {
			const userId = (await Auth.currentAuthenticatedUser()).username
			isLoggedIn = true

			const plan = await getPlanByCustomerId(userId)
			if (plan) {
				planExists = true
			} else {
				planExists = false
			}
		} catch (e) {
			isLoggedIn = false
		}

	})
    
</script>

<div class="relative w-full">
    <img src="/images/banner.png" class="bg-gradient-to-b from-transparent to-peach bg-blend-soft-light object-cover h-50 w-full" alt="banner"/>
    <div class="absolute top-0 bg-gradient-to-b from-transparent to-peach bg-blend-soft-light w-screen h-full"></div>
    <div class="absolute bottom-0 w-screen flex flex-col items-center">
        <div class="flex mx-auto mb-2">
            <img src="/images/logo.png" alt="logo" width="48" />
            <h1 class="my-auto ml-3 text-2xl font-losta">{COMPANY_NAME}</h1>
        </div>
        <p class="text-[15px]">{SLOGAN}</p>
    </div>
</div>

<button class={`fixed z-100 right-4 top-6 bg-white py-2 px-1.5 rounded-md ${sideMenu? "" : "shadow-md"}`} on:click={() => sideMenu = !sideMenu}>
    <svg class="hover:opacity-70 transition-all duration-100 ease-in-out" viewBox="0 0 10 8" width="25">
        <path d="M1 1h8M1 4h 8M1 7h8" class="stroke-topaz" stroke-width="1.3" stroke-linecap="round" />
    </svg>
</button>
{#if sideMenu}
    <SideMenu bind:sideMenu={sideMenu} isLoggedIn={isLoggedIn} planExists={planExists} />
{/if}

<div class="max-w-xl w-full mx-auto">
    <slot />
</div>
