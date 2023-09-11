<script lang="ts">
  import userData from "$lib/content/data";
  import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<footer class="mx-auto max-w-6xl px-6 py-8 md:mt-20">
  <div class="flex flex-col-reverse items-center justify-center md:flex-row md:gap-6">
    <a href="/" class="p-1">
      <div>&copy; {userData.name}</div>
    </a>
    <div class="flex flex-row items-center gap-3 p-2 md:gap-6">
      <a href={userData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon class="text-2xl" icon={faTwitter} />
      </a>
      <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon class="text-2xl" icon={faGithub} />
      </a>
      <ThemeSwitch />
    </div>
  </div>
</footer>
