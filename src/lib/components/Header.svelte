<script>
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import { Sun, Moon } from "radix-icons-svelte";
</script>

<header class="flex items-center lg:px-5 lg:py-2 p-0">
    <div class="font-header flex lg:flex-row flex-col items-center justify-between lg:p-4 py-2 w-full lg:mx-auto z-20">
        <div>
            <a class="text-2xl link-primary drop-shadow-lg" href="/"><img class="lg:w-40 w-20" src="/text_white.png" alt="EVEN"></a>
        </div>
        <div class="flex items-center justify-around gap-10 text-xl">
            <a class="link-primary" href="/about">About</a>
            <a class="link-primary" href="/blog">Blog</a>
            <a class="link-primary" href="/shop">Shop</a>
            <Button on:click={toggleMode} variant="outline" size="icon">
                <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-primary-foreground"/>
                <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-secondary-foreground"/>
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
</header>