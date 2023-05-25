<script lang="ts">
    
    const size = 150
    const circleRadius = size/2 * 0.8
    const full = Math.PI * 2 * circleRadius

    export let mealCreditsRemaining: number
    export let totalMealCredits: number

    const percent = mealCreditsRemaining / totalMealCredits
    const calculatedPercentage = full * (1 - percent) * -1
</script>

<svg viewBox="0 0 {size} {size}">
    <circle class="stroke-gray-200 fill-white" cx="{size/2}" cy="{size/2}" r="{circleRadius}" stroke-width="11" stroke-linecap="round" />
    <circle class="stroke-topaz fill-transparent origin-center"
            style="stroke-dasharray:{full}; stroke-dashoffset:{calculatedPercentage}; transform: rotate(-90deg);"
            cx="{size/2}" cy="{size/2}" r="{circleRadius}" stroke-width="11" stroke-linecap="round" />
    <text class="text-sm" x="50%" y="38%" dominant-baseline="middle" text-anchor="middle">Meal Credits</text>
    <text class="text-sm" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">remaining</text>
    <text class="text-sm" x="50%" y="62%" dominant-baseline="middle" text-anchor="middle">({mealCreditsRemaining}/{totalMealCredits})</text>
</svg>
