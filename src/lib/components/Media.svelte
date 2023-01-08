<script>
  import { fade } from 'svelte/transition';
  import Video from '$lib/components/Video.svelte';

  export let src;
  export let alt;
</script>

{#if src.endsWith('.mp4')}
  <Video {src} {alt} />
{:else}
  <img in:fade {src} {alt} />
{/if}
