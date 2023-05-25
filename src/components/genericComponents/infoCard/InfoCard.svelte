<script lang="ts">
	export let leftSideGraphic: string;
	export let leftSideText = '';
	export let rightSideImage = ''
	export let value = '';
	export let colContents = {};
	export let selection = '';
	export let stackCards = false;
    export let underhang = false
    export let toggleableUnderhang = false
    let toggleUnderhang = false

	const handleClick = () => {
		if (leftSideGraphic == 'Radio') {
			selection = value;
		}
        if (underhang && toggleableUnderhang) {
            toggleUnderhang = !toggleUnderhang
        }
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="bg-white rounded-md shadow-md {stackCards ? 'my-0.5' : 'my-1'} p-3 w-full z-1 relative" on:click={handleClick} >
	<div class="flex items-center">
		{#if leftSideGraphic == 'Skeleton'}
			<div class="animate-pulse bg-gray-400 h-6 w-6" />
		{:else if leftSideGraphic == 'Text'}
			<div class="flex justify-center w-14">
				<h1 class="text-xl font-400 mr-2">{leftSideText}</h1>
			</div>
		{:else if leftSideGraphic == 'Radio'}
			<div class="flex flex-col justify-center ml-2 mr-0">
				<input type="radio" bind:group={selection} id="radio" class="accent-gray-500" {value} />
			</div>
		{/if}

		<div class="flex flex-col w-full px-2">
			{#if leftSideGraphic == 'Skeleton'}
				<div class="">
					<div class="animate-pulse bg-gray-400 h-2 ml-2 w-11/12 my-2" />
					<div class="animate-pulse bg-gray-400 h-2 ml-2 w-11/12 my-2" />
				</div>
			{:else if leftSideGraphic == 'Two Columns'}
				<div class="flex flex-col space-y-4">
					{#each Object.entries(colContents) as content, i}
                        {#if content[1]}
                            <div class="font-500 text-sm">
                                {content[0]}:
                                <span class="text-sm font-normal flex-1 whitespace-pre">
                                    {content[1]}
                                </span>
                            </div>
						{/if}
					{/each}
				</div>
			{:else}
				<h4 class={$$slots.body ? "mt-1 mb-2" : "my-2"}>
					<slot name="header" />
				</h4>
				{#if $$slots.body}
					<p class="text-grey text-xs whitespace-pre-line">
						<slot name="body" />
					</p>
				{/if}
			{/if}
		</div>
		{#if rightSideImage !== ''}
		<div class="flex-grow-0 w-[25%]">
			<img class="rounded-md" src={rightSideImage} alt="" />
		</div>
		{/if}
	</div>
</div>

{#if (underhang && !toggleableUnderhang) || (toggleableUnderhang && toggleUnderhang)}
    <div class={`flex relative bg-white bg-opacity-60 w-full -mt-2 rounded-md pt-2 pl-3 ${stackCards ? "mb-0.5" : "mb-4"}`}>
        <div class="w-12" />
        <div class="text-xs py-2">
            <slot name="underhang"/>
        </div>
    </div>
{/if}