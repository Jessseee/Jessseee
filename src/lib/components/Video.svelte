<script>
  import { fade } from 'svelte/transition';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faPlayCircle, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

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

  let failedLoading = false;
  function disableVideo() {
    failedLoading = true;
  }

  export let src;
  export let alt;
</script>

<div class="video-container" in:fade>
  <button on:click={playButton} class="video-overlay" disabled={failedLoading}>
    <div>
      <Fa class="play-button" icon={failedLoading ? faVideoSlash : faPlayCircle} size="4x" />
      {#if failedLoading} <p>{alt ?? 'Sorry, this video seems to be unavailable'}</p> {/if}
    </div>
  </button>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video loop>
    <source {src} type="video/mp4" on:error={disableVideo} />
  </video>
</div>

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
      color: #ffffff
      background-color: transparent
      border: none
      transition: transform 200ms
      &:not(:disabled):hover
        cursor: pointer
        transform: scale(1.1)
      p
        margin-bottom: -1em
</style>
