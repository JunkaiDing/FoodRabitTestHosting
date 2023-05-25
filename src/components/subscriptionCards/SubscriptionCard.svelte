<script>
    export let src
    export let title
    export let price
    export let desc
    export let bgColor
</script>

<div class="shadow-lg relative w-full rounded-lg overflow-hidden {bgColor}" style="aspect-ratio: 3/2">
    <div class="absolute bg-gradient-to-b from-transparent to-white w-full h-full z-10"></div>
    <img class="absolute bottom-0 mx-auto inset-x-0 mb-[10%]" src={src} alt="food"/>
    <div class="absolute bottom-0 z-20 w-full flex justify-between items-end px-4 py-5">
        <div>
            <p class="text-2xl font-bold">{title}</p>
            <p class="text-sm">{desc}</p>
        </div>
        <p class="text-6xl font-bold">${price}</p>
    </div>
</div>
