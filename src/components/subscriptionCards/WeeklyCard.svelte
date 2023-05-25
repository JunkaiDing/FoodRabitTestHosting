<script>
    import SubscriptionCard from "./SubscriptionCard.svelte";
    export let price
    export let desc
</script>

<SubscriptionCard src="images/weekly.svg" title="Weekly" price={price} desc={desc} bgColor="bg-[#D3FF75]"/>