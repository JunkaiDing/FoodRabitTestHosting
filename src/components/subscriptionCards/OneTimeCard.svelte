<script>
    import SubscriptionCard from "./SubscriptionCard.svelte";
    export let price
    export let desc
</script>

<SubscriptionCard src="images/oneTime.svg" title="One Time" price={price} desc={desc} bgColor="bg-[#FFA775]"/>