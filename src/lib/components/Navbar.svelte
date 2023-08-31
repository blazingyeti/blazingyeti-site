<script lang="ts">
  import userData from "$lib/content/data";
</script>

<div class="flew-row mx-auto flex max-w-3xl justify-between px-6 py-8 md:py-14">
  <div class="flex items-center justify-between md:flex-row">
    <div class="flex flex-col">
      <a href="/">
        <h1 class="text-xl font-semibold dark:text-gray-100 md:text-3xl">
          {userData.name}
        </h1>
        <p class="hidden md:block md:text-xl">
          {userData.description}
        </p>
      </a>
    </div>
  </div>

  <div class="mt-4 block space-x-8">
    <a href="/about" class="nav-link">About</a>
    <a href="/projects" class="nav-link">Projects</a>
  </div>
</div>
