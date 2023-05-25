<script lang="ts">
	import { goto } from "$app/navigation"
	import { fly, fade } from 'svelte/transition';
	import {Auth} from "aws-amplify";

	export let sideMenu = false
	export let isLoggedIn = false
	export let planExists = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="w-full h-full z-51 fixed left-0 top-0 bg-black bg-opacity-80" on:click={() => sideMenu = false} transition:fade="{{ duration: 100 }}">

	<div class="right-0 absolute flex flex-col items-center justify-between flex-grow p-4 h-full <lg:w-[65%] lg:w-[35%] bg-white" on:click|stopPropagation transition:fly="{{ x: 200, duration: 200 }}">
		<span></span>

		<div class="flex flex-col w-full items-end space-y-2 text-lg font-bold text-right">
			<a href="/">home</a>
			{#if isLoggedIn}
				<a href="/dashboard">my account</a>
				{#if planExists}
					<a href="/weekly-menu">weekly menu</a>
				{/if}
			{/if}
			<a href="/about-us">about us</a>
			<a href="#">contact us</a>
		</div>

		<div class="space-y-2 flex flex-col justify-end w-full py-2">
			<a href="/select-subscription"><button class="btn w-full"> Order Now </button></a>
			{#if isLoggedIn}
				<button on:click={() => Auth.signOut().then(() => {
					goto('/')
					location.reload()
				})} class="btn-secondary w-full"> Sign Out </button>
			{:else}
				<a href="/sign-in"><button on:click={() => goto('/sign-in')} class="btn-secondary w-full"> Sign In </button></a>
			{/if}
		</div>
	</div>
</div>