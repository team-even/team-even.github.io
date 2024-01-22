<script>
    import SectionWrapper from "$lib/components/SectionWrapper.svelte";
    let staff_list = [
        {
            name: "Brooklyn",
            bio: "Brooklyn has served as our Chief Executive Officer since 2023. As CEO, Brooklyn is the visionary force that steers EVEN's strategic direction with a focus on people, community, and equity. Outside the tech sphere, Brooklyn's hobbies include exploring the art of pottery, staying active with fitness, and cherishing time with her pets. With an esteemed education from Spelman College, she is not only a tech innovator but also a committed advocate for positive societal impact.",
            pic: "/brooklyn.jpg",
        },
        {
            name: "Vanessa",
            bio: "Vanessa has served as our Chief marketing officer since 2023. As the CMO, Vanessa oversees the development and maintenance of EVEN’s image + identity including marketing and customer acquisition. Beyond the world of tech, Vanessa is a creative and her interests blend into her passions for inclusivity, linguistics, and accessibility, making her a force for positive change in both the tech and cultural spheres. She holds a B.A. in the Spanish Language from Spelman College.",
            pic: "/vanessa.jpg",
        },
        {
            name: "Dante",
            bio: "Dante has served as our Chief Software Engineer since 2023.",
            pic: "/dante.jpg",
        }
    ]
</script>

<section class="w-full p-40">
    <h1 class="text-center text-5xl font-header">Our Team</h1>
    {#each staff_list as staff}
    <div class="m-10 bg-accent p-10">
        <img class="w-20" src="{staff.pic}" alt="{staff.name}">
        <h1 class="font-header text-xl">{staff.name}</h1>
        <h2 class="font-body text-lg">{staff.bio}</h2>
    </div>
    {/each}
</section>