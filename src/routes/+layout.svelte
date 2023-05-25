<script>
    import "virtual:windi.css"
    import "../app.css"
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" crossorigin="anonymous">
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:wght@400;700&display=swap" crossorigin="anonymous">
    <link rel="preload" href="/fonts/LostaMasta-Regular.ttf" as="font" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:wght@400;700&display=swap">
</svelte:head>

<slot />

<style>
    :global(body) {
        @apply bg-peach;
    }
</style>