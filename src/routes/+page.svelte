<script>
  export let data;
</script>

<div class="grid">
  {#each data.projects as project}
    <a href="/{project.slug}" class="col-6">
      <img src="/images/{project.slug}/cover.png" alt={project.title} />
    </a>
  {/each}
</div>
