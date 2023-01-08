<script>
  import { fade } from 'svelte/transition';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faPlayCircle, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

  let video;
  let button;

  function toggleVideoPlaying() {
    if (videoError) return;
    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.style.display = 'block';
    }
  }

  let videoError = false;
  function disableVideo() {
    videoError = true;
  }

  export let src;
  export let alt;
</script>

<div class="video-container" in:fade>
  <button
    aria-label={alt}
    on:click={toggleVideoPlaying}
    class="video-overlay {videoError ? 'disabled' : ''}">
    <span bind:this={button} aria-hidden="true" class="text-center">
      <Fa class="play-button" icon={videoError ? faVideoSlash : faPlayCircle} size="4x" />
      {#if videoError} <p>{'Sorry, this video seems to be unavailable'}</p> {/if}
    </span>
  </button>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video loop bind:this={video}>
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
      &:not(.disabled):hover
        cursor: pointer
        transform: scale(1.1)
      p
        margin-bottom: -1em
</style>
