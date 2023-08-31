<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let project: App.Project;
  export let showModal: boolean;

  const dispatch = createEventDispatcher();
</script>

<div class="modal" class:modal-open={showModal}>
  <div class="modal-box">
    <div class="flex justify-end">
      <button class="" on:click={() => dispatch("close")}> Close </button>
    </div>
    <div class="flex justify-center pb-8 text-2xl">
      {project.title}
    </div>

    <div class="text-md flex flex-col justify-center">
      <div class="flex flex-col pb-4">
        <img src={project.imgUrl} alt="project" width={300} height={300} />
      </div>
      <a
        href={project.demo}
        class="flex justify-center hover:font-bold hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Demo of Project
      </a>
      <a
        href={project.link}
        class="flex items-center justify-center gap-1 py-2 hover:font-bold hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        <!-- <GrGithub /> Github Repository -->
      </a>
      <div class="flex flex-wrap gap-2 pt-4">
        {#each project.tags as tag}
          <div class="rounded-sm border border-gray-800 bg-slate-300 p-0.5 text-zinc-700 shadow-sm">
            {tag}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
