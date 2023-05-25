<script lang="ts">
    import ProgressBar from './ProgressBar.svelte'
    import CompanyLogo from "../CompanyLogo.svelte";
    import { onMount } from "svelte";
    import SideMenu from '../SideMenu.svelte';
    import {Auth, Amplify} from "aws-amplify";
	import awsConfig from '../../aws-exports'
	import {getPlanByCustomerId} from '../../data/mockData'
    Amplify.configure(awsConfig)
    let isLoggedIn = false
	let planExists = false

    export let position = 0
    export let backButton = true
    export let logo = true
    let sideMenu = false

    let myHeader: Element

    onMount(async () => {

        const observer = new IntersectionObserver(
            ([e]) => {e.target.classList.toggle('shadow-md', e.intersectionRatio < 1)},
            {threshold: [1]}
        );
        observer.observe(myHeader)

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

<div bind:this={myHeader} class="flex flex-col flex-shrink-0 pt-4 pb-1 w-full sticky top-0 bg-white myHeader -top-[0.25px] z-50 min-h-12">
    <div class="relative text-center">
        {#if backButton}
            <button class="absolute left-2 top-[30%] appearance-none" on:click={() => history.back()}>
                <svg class="fill-topaz hover:opacity-70 transition-all duration-100 ease-in-out" width="18" height="18" viewBox="0 0 24 24">
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
            </button>
        {/if}
        {#if logo}
            <CompanyLogo />
        {/if}
        <button class="absolute right-4 top-[30%]" on:click={() => sideMenu = !sideMenu}>
            <span class="relative z-100">
                <svg class="hover:opacity-70 transition-all duration-100 ease-in-out" viewBox="0 0 10 8" width="25">
                    <path d="M1 1h8M1 4h 8M1 7h8" class="stroke-topaz" stroke-width="1.3" stroke-linecap="round" />
                </svg>
            </span>
        </button>
        {#if sideMenu}
            <SideMenu bind:sideMenu={sideMenu} isLoggedIn={isLoggedIn} planExists={planExists} />
        {/if}
    </div>
    {#if position >= 0}
        <div class="flex justify-center py-2">
            <ProgressBar position={position} />
        </div>
    {/if}
</div>