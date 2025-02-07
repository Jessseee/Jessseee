<script>
  import { fade } from 'svelte/transition';
  import Typewriter from 'svelte-typewriter';
  import Button from '$lib/components/Button.svelte';
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faFilePen } from '@fortawesome/free-solid-svg-icons';

  export let data;
</script>

<svelte:head>
  <title>Jesse Visser</title>
</svelte:head>

<div id="intro" class="grid">
  <div class="col-12 col-lg-5">
    <img id="profile" src="/media/images/profile.jpg" alt="That's me!" />
  </div>
  <div class="col-12 col-lg-7">
    <h1>Hey, I'm Jesse</h1>
    <p>
      <Typewriter mode="loop" wordInterval={2000}>
        <span data-static>I am a</span>
        <b>Creative Technologist</b>
        <b>Software Developer</b>
        <b>Web Designer</b>
        <b>AI Engineer</b>
        <b>Game Developer</b>
        <b>Interaction Technologist</b>
        <b>Researcher</b>
      </Typewriter>
    </p>
    <div id="social-links">
      <Button
        icon={faLinkedin}
        href="https://linkedin.com/in/jesse-visser-17a006171/"
        bgColor="#0e76a8"
        color="#ffffff">
        Linkedin
      </Button>
      <Button icon={faGithub} href="https://github.com/Jessseee" bgColor="#fcc300" color="#ffffff">
        Github
      </Button>
      <Button icon={faFilePen} bgColor="#916eff" color="#ffffff" href="/resume">Resume</Button>
    </div>
  </div>
</div>

<div id="projects" class="grid">
  {#each data.projects as project}
    {#if !project.meta.hidden}
      <a href="/{project.slug}" class="col-12 col-md-6 col-xl-4">
        <img
          src="/media/images/{project.slug}/cover.png"
          alt={project.title}
          width={project.meta.square ? 1080 : 1920}
          height="1080"
          in:fade />
      </a>
    {/if}
  {/each}
</div>

<style lang="sass">
  @use "$lib/styles/variables" as *

  :root
    --cursor-width: 3px
    --cursor-color: #2196f3

  #profile
    width: 250px
    height: 250px
    object-fit: cover
    border-radius: 60% 90% 80% 70% / 70% 90% 60% 90%

  #intro
    padding-left: 1em
    padding-right: 1em
    margin-bottom: 2em
    h1
      font-size: 3em
      margin-bottom: 0.25em
    p
      font-size: 1.2em
      margin-top: 0.25em
      margin-bottom: 1.5em
      max-width: 550px

  #social-links
    margin-bottom: 1em

  #projects a
    img
      transition: transform 200ms
    &:hover img
      transform: scale(1.05)

</style>
