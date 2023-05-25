<script>
    import SubscriptionCard from "./SubscriptionCard.svelte";
    export let price
    export let desc
</script>
    <SubscriptionCard src="images/monthly.svg" title="Monthly" price={price} desc={desc} bgColor="bg-[#75FFF7]"/>