<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/styles/global.sass';
</script>

<Navbar />

<main>
	<slot />
</main>

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
      width: 50%
</style>
