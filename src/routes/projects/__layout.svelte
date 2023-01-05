<script context="module">
  // Importing the Media component as 'img' to parse ![alt](src) Markdown tags
  import img from '$lib/components/Media.svelte';
  export { img };
</script>

<slot />
