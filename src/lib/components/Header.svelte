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
    <nav class="fixed w-full flex flex-row md:justify-evenly justify-between items-center bg-background bg-opacity-40 backdrop-blur-md py-3 md:px-0 px-8 z-10" class:activeMenu={toggleMenuState}>
        <a class="link-header text-2xl" href="/">EVEN</a>
        <div class="md:flex hidden justify-between items-center gap-5">
            {#each menu_list as item}
                <a class="link-header" class:active={$page.url.pathname === item.link} href="{item.link}">{item.title}</a>
            {/each}
        </div>
        <div class="flex gap-6">
            <Button on:click={toggleMenuButton} class="md:hidden" variant="ghost" size="icon">
                <HamburgerMenu class="w-[1.6rem] h-[1.6rem]"/>
            </Button>
            <Button variant="ghost" on:click={toggleMode} size="icon">
                <Sun class="block dark:hidden md:w-[1.3rem] md:h-[1.3rem] w-[1.6rem] h-[1.6rem]"/>
                <Moon class="hidden dark:block md:w-[1.3rem] md:h-[1.3rem] w-[1.6rem] h-[1.6rem]"/>
            </Button>
        </div>
    </nav>
    {#if toggleMenuState}
        <div class="md:hidden fixed flex flex-col justify-start items-center w-full h-50 translate-y-10 z-20">
            {#each menu_list as item}
                <a class="link-header text-3xl my-3 p-2" href="{item.link}">{item.title}</a>
            {/each}
        </div>
    {/if}
</header>

<style>
    .activeMenu {
        padding-bottom: 10rem;
    }
</style>