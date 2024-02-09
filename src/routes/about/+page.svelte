<script>
    import { Badge } from "$lib/components/ui/badge";
    import { staff_list } from "$lib/staff_list.js";
</script>

<section class="pt-20">
    <h1 class="text-3xl text-center font-header py-5">Our Team</h1>
    <div class="flex md:flex-row flex-col justify-evenly items-center">
        {#each staff_list as staff}
            <a class="flex-col justify-center items-center my-5" href="/about/{staff.name}">
                <img class="rounded-full h-full md:w-3/5 w-2/4 m-auto" src="{staff.pic}" alt="Portrait of {staff.name}">
                <h1 class="text-center text-2xl font-header">{staff.name}</h1>
                <h2 class="text-center textl-lg font-header">{staff.role_tag}</h2>
            </a>
        {/each}
    </div>
</section>