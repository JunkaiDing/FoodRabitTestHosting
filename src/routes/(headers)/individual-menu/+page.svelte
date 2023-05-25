<script>
    import IndividualMenu from "../../../components/IndividualMenu.svelte";
    import {headingSubTitle, headingTitle} from "../../../stores/stores";
    headingTitle.set("I want to eat a meal on...")
    headingSubTitle.set("")
</script>

<IndividualMenu/>