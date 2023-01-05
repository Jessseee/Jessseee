<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

  function playButton() {
    const video = this.nextElementSibling;
    const button = this.childNodes[0];
    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.style.display = 'block';
    }
  }

  export let src;
  export let title;
</script>

{#if src.endsWith('.mp4')}
  <div class="video-container">
    <div on:click={playButton} class="video-overlay">
      <Fa class="play-button" icon={faPlayCircle} size="4x" />
    </div>
    <video loop>
      <source {src} type="video/mp4" />
      Sorry, it seems like this video cannot be loaded.
    </video>
  </div>
{:else}
  <img {src} {title} />
{/if}

<style lang="sass">
  .video-container
    position: relative
    background-color: var(--bs-dark)
    color: var(--bs-light)

  .video-overlay
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    z-index: 1
    color: #eeeeee
</style>
