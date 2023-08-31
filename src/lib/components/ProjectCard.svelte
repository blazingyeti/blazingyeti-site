<script lang="ts">
  export let project: App.Project;
</script>

<div class="card card-normal project-card bg-base-100">
  <figure class="px-10 pt-10">
    <img src={project.imgUrl} alt="project" width={200} height={200} />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{project.title}</h2>
  </div>
</div>
