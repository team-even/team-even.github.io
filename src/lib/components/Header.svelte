<script>
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import { Sun, Moon } from "radix-icons-svelte";
</script>

<header class="flex items-center px-52 py-2">
    <div class="font-header flex items-center justify-between p-4 py-2 w-full mx-auto z-20">
        <a class="text-2xl link-primary" href="/"><img class="w-40" src="/text_white.png" alt="EVEN"></a>

        <nav class="flex items-center gap-8 text-xl">
            <a class="link-primary" href="/about">About</a>
            <a class="link-primary" href="/blog">Blog</a>
            <Button on:click={toggleMode} variant="outline" size="icon">
                <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 hover:text-primary-foreground"/>
                <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hover:text-secondary-foreground"/>
                <span class="sr-only">Toggle theme</span>
            </Button>
        </nav>
    </div>
</header>