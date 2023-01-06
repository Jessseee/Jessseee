<script>
  import IconLink from '$lib/components/IconLink.svelte';
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

  export let data;
</script>

<div id="intro" class="grid">
  <div class="col-12 col-md-4">
    <img id="profile" src="/images/profile.jpg" alt="That's me!" />
  </div>
  <div class="col-12 col-md-8">
    <h1>Hey, I'm Jesse</h1>
    <p id="text">
      I am a <em>Creative Technologist</em> from The Netherlands. I make interactive experiences, websites
      and artificial intelligence applications. On this website you will find projects I've worked on
      personally and professionally in the past couple of years.
    </p>
    <div id="social-links">
      <IconLink
        icon={faGithub}
        href="https://github.com/Jessseee"
        bgColor="#fcc300"
        color="#ffffff">
        Github
      </IconLink>
      <IconLink
        icon={faLinkedin}
        href="https://linkedin.com/in/jesse-visser-17a006171/"
        bgColor="#0e76a8"
        color="#ffffff">
        Linkedin
      </IconLink>
    </div>
  </div>
</div>

<div id="projects" class="grid">
  {#each data.projects as project}
    <a href="/{project.slug}" class="col-12 col-md-6 col-xl-4">
      <img src="/images/{project.slug}/cover.png" alt={project.title} />
    </a>
  {/each}
</div>

<style lang="sass">
  #intro
    #profile
      width: 200px
      height: 200px
      object-fit: cover
      border-radius: 50%
    #text
      text-align: justify
      max-width: 500px
      margin-bottom: 1em
    margin-bottom: 1em

  #social-links
    margin-bottom: 1em

  #projects a
    img
      transition: transform 200ms
    &:hover img
      transform: scale(1.05)
</style>
