<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import config from "$lib/content/data";
  import "$lib/css/app.css";
  import { initPlausible } from "$lib/utils/stats";
  import { config as FaConfig } from "@fortawesome/fontawesome-svg-core";
  import { onMount } from "svelte";

  import "@fortawesome/fontawesome-svg-core/styles.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
  FaConfig.autoAddCss = false;

  const keywords = config.keywords;

  onMount(() => {
    initPlausible();
  });
</script>

<svelte:head>
  <title>{config.name}</title>
  <meta name="keywords" content={keywords.join(", ")} />
</svelte:head>

<div class="container mx-auto">
  <Navbar />
  <main class="main">
    {@render children?.()}
  </main>
  <Footer />
</div>
