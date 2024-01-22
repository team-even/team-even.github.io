<script lang="ts">
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<ModeWatcher />
<Header />
<slot />
<Footer />