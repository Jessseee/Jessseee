<script>
  import Fa from 'svelte-fa/src/fa.svelte';

  export let icon;
  export let href;
  export let bgColor = 'transparent';
  export let color = 'inherit';
</script>

<span class="icon-link" style="--color:{color}; --bg-color:{bgColor}">
  <a {href}>
    <Fa {icon} fw />
    <slot />
  </a>
</span>

<style lang="sass">
	span
		background-color: var(--bg-color)
		padding: 0.2em 0.75em
		border-radius: 0.5em
		a
			white-space: nowrap
			color: var(--color)
</style>
