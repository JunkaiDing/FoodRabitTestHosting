<script lang="ts">
    import {headingSubTitle, headingTitle, progress} from "../../../stores/stores";
    import { goto } from "$app/navigation";

    const handleStart = () => {
        goto("weekly-menu")
    }

    progress.set(1);
    headingTitle.set("Select your meal")
    headingSubTitle.set("The menu is different for each day. Weekly Menu is updated every Sat 6pm")
</script>

<div class="flex flex-col items-center flex-grow w-full mt-10">

    <div class="flex flex-col flex-grow justify-center items-center">
        <img src="/images/select_menu_graphic.svg" alt="" width="200">
    </div>
    
    <div class="flex flex-col flex-grow justify-end w-full p-4 space-y-2">
        <button on:click={handleStart} class="btn w-full">
            Let's Start Ordering
        </button>
    </div>
    
</div>


