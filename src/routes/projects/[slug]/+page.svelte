<script>
  export let data;
</script>

<content>
  <h1>{ data.title }</h1>
  <svelte:component this={ data.content } />
</content>

<style lang="sass">
  *
    text-align: justify
</style>