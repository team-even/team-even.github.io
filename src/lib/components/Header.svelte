<script>
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import { Sun, Moon, HamburgerMenu, Cross1 } from "radix-icons-svelte";
    import { page } from "$app/stores";
    import { menu_list } from "$lib/menu_list.js";
    export let toggleMenuState = false;
    export let toggleMenuButton = () => {
        toggleMenuState = !toggleMenuState
    };
</script>

<header>
    <nav class="fixed w-full flex flex-row md:justify-between justify-between items-center bg-background bg-opacity-40 backdrop-blur-md py-2 px-2 z-10" class:activeMenu={toggleMenuState}>
        <a class="link-header fill-foreground" href="/">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3422 815" height="100%" width="140"><path d="M304.3 132.5c-21.8 2.8-49.2 10.1-65.5 17.7l-6.8 3.1v58.8c0 36.6.4 58.9 1 58.9.5 0 9.8-2.7 20.7-5.9 63.7-19.2 88.5-22.2 122.3-15 14.5 3.1 42.3 12.8 64.2 22.2 75.5 32.8 128.7 41.8 195.5 33.2 32-4.2 71.7-15.1 99.6-27.5l4.7-2.1V218c0-32.7-.4-58-.9-58s-12.3 3.8-26.2 8.4c-46.8 15.6-75.4 21.2-114.4 22.3-28.9.8-53.5-1.7-80.3-8.3-20.3-5-34.5-10.3-68-25.3-23-10.3-51.4-18.9-76.3-23.2-16.3-2.7-53-3.5-69.6-1.4zm1213.2 56.2c8.1 27.4 46 167.2 63 232.3 6.4 24.5 13.2 50.3 15.2 57.5 19.4 70.4 62.5 119.7 121.8 139.4 24.3 8.1 48.6 11 76.5 9.1 40.3-2.6 68.5-12.2 94.8-32 9.7-7.3 24.8-23 32.5-33.7 14.5-20.3 26.5-46.1 35.1-75.3 4.4-14.8 52.7-198.7 70.6-268.5 3.4-13.2 6.8-26.1 7.5-28.8l1.4-4.7h-106.6l-12.8 50.7c-25.4 100.5-54.7 211.3-61.7 233.3-10.9 34.2-27.8 54-51.8 60.6-9.1 2.4-29.2 3-38.2 1-25.3-5.6-49.5-27-62.4-55.2-4.1-9-5.8-14.9-22.4-77.9-12-45.4-52.7-197.1-55.6-207.3l-1.5-5.2h-106.8l1.4 4.7zm1457-3.7c-67.2 6.8-120.3 46.3-149.6 111.4-7.3 16.2-10.8 27.2-22 70.1-20 76.3-38.5 145-59.5 220.6-5.7 20.8-10.4 38.4-10.4 39.3 0 1.4 5.1 1.6 52.9 1.6 49.6 0 53-.1 53.5-1.8 2.4-7.9 58.3-217.3 68.1-254.7 2.6-9.9 5.9-21.1 7.2-25 10.5-29 32-52.3 57.2-61.6 7.5-2.8 10.2-3.3 21.1-3.7 38.4-1.4 59.9 14.6 75.3 55.8 6.9 18.6 53.4 194 72.1 272.5 1.5 6 3.1 12.7 3.7 14.7l1 3.8h52.9c40.1 0 53-.3 53-1.2 0-1.4-7.8-31.7-31-120.9-32.3-123.7-47.8-181.2-52.5-194.9-7.7-22.5-20.1-46.7-32.3-62.8-26.2-34.9-60.8-55-106.3-61.6-13.1-2-42.4-2.8-54.4-1.6zM934 188c-2 2-2 3.3-2 218.8v216.9l2.1 1.9c2.1 1.9 7.6 1.9 236 2.2l233.9.2v-93h-380v-82h380v-92h-380v-83h380v-92h-234c-232.7 0-234 0-236 2zm1216 0c-2 2-2 3.3-2 218.9v217l2.6 2 2.7 2.1H2620v-93h-380v-82h380v-92h-380v-83h380v-92h-234c-232.7 0-234 0-236 2zM354 376.3v57.4l8.6 1.2c19.7 2.8 47 11.2 73.4 22.8 18.2 7.9 42.9 17.6 55.5 21.6 59.2 19 114 21.2 178 7.1 16.8-3.7 44.5-12.5 60.5-19.2l9.5-4 .3-58.1c.1-39.4-.1-58.1-.8-58.1-.6 0-10.4 3.2-21.8 7-47.8 16.3-79.4 22.6-118.7 23.7-48.1 1.4-89-7-135-27.7-28.5-12.8-47.5-19.7-68.4-24.6-10.2-2.5-34.2-6.4-38.8-6.4H354v57.3zm-85.7-43.8c-18.7 4.2-33.6 20.1-36.2 38.7-3.8 27.1 15.5 51.5 42.4 53.5 40.4 3.1 64.9-42.5 40.6-75.5-9.7-13.2-30.2-20.5-46.8-16.7zm32.2 174.6c-20.3 2.2-48.1 9.1-63.8 15.8l-4.7 2v59.6c0 32.7.3 59.5.8 59.5.4 0 6.6-1.8 13.7-4 31.1-9.7 60.5-16.3 79.1-17.9 28.2-2.5 60.4 5.3 108.9 26.2 24.9 10.7 41.6 17 59 22 54.4 15.8 103.3 17.5 162 5.6 24.9-5.1 59.7-16.5 78.5-25.7l5.5-2.7.3-56.3c.2-53.4.1-56.3-1.5-55.8-1 .3-18.2 5.1-38.3 10.7-55.4 15.4-73.4 18.6-109.1 19.6-24.5.7-39.9-.4-61.9-4.3-23.8-4.3-46.7-11.4-69.5-21.6-40.5-18.3-65.7-26.4-97.2-31.4-11.9-1.9-49.1-2.7-61.8-1.3z"/></svg>
        </a>
        <div class="flex justify-between items-center gap-6">
            {#each menu_list as item}
                <a class="md:flex hidden link-header" class:active={$page.url.pathname === item.link} href="{item.link}">{item.title}</a>
            {/each}
            <Button on:click={toggleMenuButton} class="md:hidden" variant="ghost" size="icon">
                <HamburgerMenu class="w-[1.6rem] h-[1.6rem]"/>
            </Button>
            <Button variant="ghost" on:click={toggleMode} size="icon">
                <Sun class="block dark:hidden md:w-[1.3rem] md:h-[1.3rem] w-[1.6rem] h-[1.6rem]"/>
                <Moon class="hidden dark:block md:w-[1.3rem] md:h-[1.3rem] w-[1.6rem] h-[1.6rem]"/>
            </Button>
        </div>
    </nav>
    <div class="hidden flex-col fixed w-full h-full z-20" class:activeText={toggleMenuState}>
        {#each menu_list as item}
            <a class="link-header text-3xl my-3 p-2" class:activeText={toggleMenuState} href="{item.link}">{item.title}</a>
        {/each}
    </div>
</header>

<style>
    .activeMenu {
        padding-bottom: 100vh;
        transition: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        @media (min-width: 768px) {
            padding-bottom: 0.75rem;
            padding-top: 0.75rem;
        }
    }
    .activeText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all;
        transition-duration: 300ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        @media (min-width: 768px) {
            display: none;
        }
    }
</style>