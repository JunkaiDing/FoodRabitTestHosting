<script lang="ts">
    import Footer from '../../../components/Footer.svelte'
    import {headingSubTitle, headingTitle, progress} from "../../../stores/stores";
    headingTitle.set("Your everyday food partner")
    headingSubTitle.set("")
    progress.set(-1)
</script>

<div class="flex flex-col items-center flex-grow w-full p-4 text-center">
    <p class="mb-8">
        We will make sure that you don't have to worry about your food requirements
        by offering you tasty and affordable options!
    </p>
    <img src="/images/about-us-1.svg" alt="About us 1" />

    <p class="my-8">
        Promise to customers - We strive to create and maintain relationships with our customers.
        Our team ensures that you meet your food requirement in time.
        We are available 24/7 to listen to your queries and address them to the best of our abilities!
    </p>
    <img src="/images/about-us-2.svg" alt="About us 2" />

    <p class="my-8">
        Teamwork - We believe in our team's effort in making us a successful organisation.
        We are a place for passionate individuals from different backgrounds whose dedication resonates with the quality of their ideas.
        Every opinion is valued at our venture because we trust each other in achieving the goals we wish to pursue!
    </p>
    <img src="/images/about-us-3.svg" alt="About us 2" />

    <p class="my-8">
        Commitment to the broader world - We are immensely respectful to the world around us.
        Our value lies in creating a positive impact while meeting the demands of our customers.
        Our operations are driven by sustainability and we pledge to direct a part of our earnings to help those in need of support.
    </p>
</div>

<Footer />