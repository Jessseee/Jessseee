<script>
  import Fa from 'svelte-fa/src/fa.svelte';

  export let icon;
  export let href;
  export let bgColor = 'transparent';
  export let color = 'inherit';
</script>

<a {href} class="icon-link" style="color:{color}; background-color:{bgColor}">
    <Fa {icon} fw />
    <slot />
</a>

<style lang="sass">
  a
    display: inline-block
    padding: 0.5em 1em
    border-radius: 0.5em
    margin-right: 0.5em
    transition: transform 200ms
    &:hover
      transform: scale(1.1)
      text-decoration: none
</style>
