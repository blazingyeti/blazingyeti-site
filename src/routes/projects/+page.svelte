<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ProjectModal from "$lib/components/ProjectModal.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import config from "$lib/content/data";

  let showModal = $state(false);
  let modalProject: App.Project = $state({
    title: "",
    repoName: "",
    link: "",
    demo: "",
    imgUrl: "",
    tags: [""],
  });

  const handleToggleModal = (project: App.Project) => {
    showModal = !showModal;
    modalProject = project;
  };
</script>

<Seo title="Projects - Blazing Yeti" pathname="projects/" />

<div class="flex flex-col justify-center">
  <h1 class="page-heading">Projects</h1>

  <div class="mx-auto grid min-w-full grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each config.projects as project}
      <button onclick={() => handleToggleModal(project)}>
        <ProjectCard {project} />
      </button>
    {/each}
  </div>
  
  <ProjectModal
    project={modalProject}
    bind:showModal
    on:close={() => handleToggleModal(modalProject)}
  />
</div>
