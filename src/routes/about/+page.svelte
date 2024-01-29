<script>
    import { Badge } from "$lib/components/ui/badge";
    let staff_list = [
        {
            name: "Brooklyn",
            bio: "Brooklyn has served as our Chief Executive Officer since 2023. As CEO, Brooklyn is the visionary force that steers EVEN's strategic direction with a focus on people, community, and equity. Outside the tech sphere, Brooklyn's hobbies include exploring the art of pottery, staying active with fitness, and cherishing time with her pets. With an esteemed education from Spelman College, she is not only a tech innovator but also a committed advocate for positive societal impact.",
            pic: "/brooklyn.jpg",
            role: "CEO"
        },
        {
            name: "Vanessa",
            bio: "Vanessa has served as our Chief marketing officer since 2023. As the CMO, Vanessa oversees the development and maintenance of EVEN’s image + identity including marketing and customer acquisition. Beyond the world of tech, Vanessa is a creative and her interests blend into her passions for inclusivity, linguistics, and accessibility, making her a force for positive change in both the tech and cultural spheres. She holds a B.A. in the Spanish Language from Spelman College.",
            pic: "/vanessa.jpg",
            role: "CMO"
        },
        {
            name: "Dante",
            bio: "Dante has served as our Chief Software Engineer since 2023.",
            pic: "/dante.jpg",
            role: "CSE"
        }
    ]
</script>

    <h1 class="font-header text-center text-5xl">Our Team</h1>
    <div class="md:flex justify-evenly items-start">
    {#each staff_list as staff}
        <div class="flex-col rounded justify-between items-center bg-accent p-5 m-2"> 
            <h1 class="text-center text-xl">{staff.name}
                <Badge variant="outline">{staff.role}</Badge>
            </h1>
            <img class="h-full md:w-72 w-52 m-auto" src="{staff.pic}" alt="{staff.name}">
            <h2 class="md:max-w-80">{staff.bio}</h2>
        </div>
    {/each}
    </div>