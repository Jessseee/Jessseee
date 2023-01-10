<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { page } from '$app/stores';
  import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
  <div class="text-center">
    <Fa color="#ffa500ff" icon={faTriangleExclamation} size="5x" />
    <h1>Error 404</h1>
    <h2>Oops, could not find that project.</h2>
    <p>
      Please return to the
      <a href="/">home page</a>.
    </p>
  </div>
</div>

<style lang="sass">
  .container
    display: flex
    width: 100%
    justify-content: center
    align-items: center
    height: calc(100vh - 50px - 1em)
  h1
    margin-bottom: 0
  h2
    margin-top: 0.25em
</style>
