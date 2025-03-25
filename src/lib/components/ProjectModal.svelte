<script lang="ts">
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faClose } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { createEventDispatcher } from "svelte";
  interface Props {
    project: App.Project;
    showModal: boolean;
  }

  let { project, showModal }: Props = $props();

  const dispatch = createEventDispatcher();
</script>

<div class="modal" class:modal-open={showModal}>
  <div class="modal-box project-modal">
    <div class="flex justify-end">
      <button class="" onclick={() => dispatch("close")}> <FontAwesomeIcon class="text-4xl hover:scale-110" icon={faClose} /> </button>
    </div>
    <div class="flex justify-center pb-8 text-2xl">
      {project.title}
    </div>

    <div class="text-md flex flex-col items-center">
      <div class="flex flex-col pb-4">
        <img src={project.imgUrl} alt="project" width={300} height={300} />
      </div>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
      >
      <div class="btn hover:scale-105">Demo of Project</div>
      </a>
      <a
        href={project.link}
        class="gap-1 py-2"
        target="_blank"
        rel="noreferrer"
      >
        <div class="btn hover:scale-105"><FontAwesomeIcon class="text-2xl" icon={faGithub} />Github</div>
      </a>
      <div class="flex flex-wrap gap-2 pt-4">
        {#each project.tags as tag}
          <div class="rounded-sm p-0.5 shadow-sm">
            {tag}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
