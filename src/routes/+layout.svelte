<script>
  import "$lib/css/app.css";

  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import config from "$lib/content/data";

  const keywords = config.keywords;
</script>

<svelte:head>
  <title>{config.name}</title>
  <meta name="keywords" content={keywords.join(", ")} />
</svelte:head>

<div class="container mx-auto">
  <Navbar />
  <main class="main">
    <slot />
  </main>
  <Footer />
</div>
