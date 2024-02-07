<script>
    export let data;
    import { Button } from "$lib/components/ui/button";
</script>

<section class="py-28 md:flex justify-center items-start md:mx-80 mx-10">
    <img class="rounded-full h-full w-60 mx-10"src="{data.staff.pic}" alt="Portrait of {data.staff.name}">
    <div class="flex-col justify-center items-center">
        <h1 class="font-header text-2xl">{data.staff.name}</h1>
        <h2 class="font-header text-lg">{data.staff.role}</h2>
        <p class="py-5 font-body">{data.staff.bio}</p>
        <Button>Contact</Button>
    </div>

</section>