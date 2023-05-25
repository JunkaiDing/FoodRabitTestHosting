<script>
    import Header from "../../components/header/Header.svelte";
    import { progress } from "../../stores/stores";
    import Heading from "../../components/header/Heading.svelte";
    import {headingSubTitle, headingTitle} from "../../stores/stores";
</script>
<Header position={$progress} />
<Heading title={$headingTitle} subtitle={$headingSubTitle}/>
<div class="max-w-xl w-full mx-auto flex flex-col flex-grow">
    <slot />
</div>