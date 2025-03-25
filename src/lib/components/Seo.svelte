<script lang="ts">
  import config from "$lib/content/data";

  interface Props {
    title?: string;
    description?: string;
    siteUrl?: string;
    image?: string;
    pathname?: string;
  }

  let {
    title = config.name,
    description = config.description,
    siteUrl = config.siteUrl,
    image = config.avatarUrl,
    pathname = ""
  }: Props = $props();
</script>

<svelte:head>
  <!-- Global Metadata -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={siteUrl + image} />
  <meta property="og:url" content={siteUrl + pathname} />

  <!-- Twitter -->
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:image" content={siteUrl + image} />
  <meta property="twitter:url" content={siteUrl + pathname} />
</svelte:head>
