<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import config from "$lib/content/data";
</script>

<Seo title="Blazing Yeti" pathname="/" />

<div class="flex flex-col items-center">
  <div class="mx-8 flex flex-col justify-center space-x-5 md:flex-row">
    <div class="px-8 py-2">
      <img src="logo.png" alt="Hero" width={600} height={600} />
    </div>
    <div class="flex flex-col items-center justify-center px-2">
      <p class="md:text-lg">{config.heroDescription}</p>
    </div>
  </div>
</div>
