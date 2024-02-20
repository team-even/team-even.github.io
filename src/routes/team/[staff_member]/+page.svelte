<script>
    export let data;
    import { Button } from "$lib/components/ui/button";
</script>

<section class="py-28 flex md:flex-row flex-col justify-center items-start lg:mx-20 mx-8">
    <img class="rounded-full h-full md:w-1/5 w-3/5 md:mx-10 m-auto" src="{data.staff.pic}" alt="Portrait of {data.staff.name}">
    <div class="flex-col justify-center items-center">
        <h1 class="font-header text-2xl">{data.staff.name}</h1>
        <h2 class="font-header text-lg">{data.staff.role}</h2>
        <p class="py-5 font-body">{@html data.staff.bio}</p>
        <Button>Contact</Button>
    </div>

</section>