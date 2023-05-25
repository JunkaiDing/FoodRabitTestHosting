<script lang="ts">
    export let position = 0;

</script>

<div class="progressBar" style="background-position: -{position * 25}% center;">

</div>

<style>
    .progressBar {
        width: 15em;
        height: 5px;
        background: repeating-linear-gradient(
            to right,
            #ddd,
            #ddd 11%,
            transparent 11%,
            transparent 12.5%
        ),
        repeating-linear-gradient(
            to right,
            #FF7857,
            #FFA459 22%,
            transparent 22%,
            transparent 25%
        );
        background-size: 200%, 100%;
        background-position: -100%;
        background-repeat: repeat-y;
    }
</style>