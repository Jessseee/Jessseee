<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import '$lib/styles/global.sass';
  import { onMount } from 'svelte';

  let loaded;
  onMount(() => (loaded = true));
</script>

{#if loaded}
  <Navbar />

  <main>
    <slot />
  </main>
{/if}

<style lang="sass">
  @import "$lib/styles/variables.sass"

  main
    width: 90%
    margin-left: auto
    margin-right: auto
    transition: width 500ms
    @include break("sm")
      width: 60%
    @include break("md")
      width: 70%
</style>
