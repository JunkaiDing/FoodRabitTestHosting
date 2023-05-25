<script lang="ts">
import {headingSubTitle, headingTitle, progress} from "../../../stores/stores";
import SelectSubscription from "../../../components/SelectSubscription.svelte";

progress.set(0)
headingTitle.set("Select Subscription Package")
headingSubTitle.set("Find a meal plan that suits your needs. The more meals you buy at once, the more you save.")
</script>


<SelectSubscription />