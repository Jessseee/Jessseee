<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { getCookie, setCookie } from '$lib/scripts/cookies';
  import { fade } from 'svelte/transition';
  import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';

  let theme;

  onMount(() => {
    theme = getCookie('theme');
    if (theme === 'dark') window.document.body.classList.add('dark');
  });

  function toggleTheme() {
    if (theme === 'light') {
      window.document.body.classList.add('dark');
      theme = 'dark';
    } else {
      window.document.body.classList.remove('dark');
      theme = 'light';
    }
    setCookie('theme', theme, 360);
  }
</script>

<nav>
  <a href="/" id="logo">
    <img src="/images/logo.png" alt="website logo" aria-hidden="true" />
  </a>

  <button id="theme-toggle" on:click={toggleTheme}>
    {#if theme === 'dark'}
      <span in:fade>
        <Fa icon={faCloudSun} size="1.5x" />
      </span>
    {:else}
      <span in:fade>
        <Fa icon={faCloudMoon} size="1.5x" />
      </span>
    {/if}
  </button>
</nav>

<style lang="sass">
  @import "$lib/styles/variables.sass"

  nav
    top: 0
    position: sticky
    background: #ffffff
    transition: margin-bottom 200ms
    height: 50px
    @include break("sm")
      margin-bottom: -20px
      background: unset

  #logo
    margin-left: 1em
    display: inline-block
    width: 55px
    transition: transform 200ms
    &:hover
      transform: scale(1.1)

  #theme-toggle
    background-color: transparent
    border: none
    margin: 1em
    float: right
    transition: transform 200ms
    &:hover
      cursor: pointer
      transform: scale(1.1)

  :global(body.dark) #theme-toggle
    color: #ffffff
</style>
