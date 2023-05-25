<script>
    import SubscriptionCard from "./SubscriptionCard.svelte";
    export let price
    export let desc
</script>

<SubscriptionCard src="images/term.svg" title="Term" price={price} desc={desc} bgColor="bg-[#759CFF]"/>