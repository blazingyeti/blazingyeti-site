<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import config from "$lib/content/data";
  import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

  const description = config.about.description;
</script>

<Seo title="About - Blazing Yeti" pathname="about/" />

<section class="">
  <h1 class="page-heading">About</h1>

  <div class=" px-2 md:px-20">
    <div class="text-l grid p-6">
      <div class="col-span-1 md:col-span-2">
        <ul class="list-disc py-4">
          {#each description as desc}
            <li class=" ">
              {desc}
            </li>
          {/each}
        </ul>
        <div class="flex items-center gap-1">
          Currently working on
          <a
            class="flew-row duration-2000 mx-1 flex transform rounded-md
              bg-red-500 p-1 text-white transition ease-out hover:scale-105"
            href={config.about.currentProjectUrl}
            target="_blank"
            rel="noreferrer"
          >
            {config.about.currentProject}
            <div class="flex items-center px-1">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        </div>
        <div class="mt-10">
          <h1 class="text-l font-semibold">Contact</h1>
          <p class="text-m">
            For any sort of inquiry, shoot an{" "}
            <a
              href={`mailto:${config.email}`}
              class="border-b-2 border-gray-800 font-bold dark:border-gray-300"
            >
              e-mail
            </a>
            {". "}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
