<script>
  import Fa from 'svelte-fa';
  export let icon;
  export let href;
</script>

<div>
  <Fa icon="{ icon }" fw />
  <a href="{ href }">
    <slot />
  </a>
</div>
