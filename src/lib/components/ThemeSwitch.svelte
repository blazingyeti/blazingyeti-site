<script lang="ts">
  import { browser } from "$app/environment";

  import theme from "$lib/utils/stores";
  import Sun from "$lib/svg/Sun.svelte";
  import Moon from "$lib/svg/Moon.svelte";

  const handleClick = () => {
    if (browser) {
      if ($theme == "dark") {
        console.log("setting to light");
        theme.set("light")
        document.documentElement.classList.remove("dark");
      } else {
        console.log("setting to dark");
        theme.set("dark")
        document.documentElement.classList.add("dark");
      }
    }
  };
</script>

<button class="" onclick={handleClick}>
  {#if $theme == "dark"}
    <Sun />
  {:else}
    <Moon />
  {/if}
</button>
