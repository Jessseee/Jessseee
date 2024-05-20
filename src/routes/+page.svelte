<script>
  import { fade } from 'svelte/transition';
  import Hey from "$lib/components/Hey.svelte";
  import Button from "$lib/components/Button.svelte";
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import Divider from "$lib/components/Divider.svelte";
  import Experience from "$lib/components/Experience.svelte";

  export let data;
</script>

<svelte:head>
  <title>Jesse Visser</title>
</svelte:head>

<div id="intro" class="grid">
  <div class="col-12 col-lg-5">
    <img id="profile" src="/images/profile.jpg" alt="That's me!" />
  </div>
  <div class="col-12 col-lg-7">
    <h1>I'm Jesse, <Hey/></h1>
    <p>
      I am a <b>Creative Technologist</b> from The Netherlands. I create interactive experiences, Machine Learning solutions and more...
    </p>
    <div id="social-links">
      <Button
        icon={faGithub}
        href="https://github.com/Jessseee"
        bgColor="#fcc300"
        color="#ffffff">
        Github
      </Button>
      <Button
        icon={faLinkedin}
        href="https://linkedin.com/in/jesse-visser-17a006171/"
        bgColor="#0e76a8"
        color="#ffffff">
        Linkedin
      </Button>
    </div>
  </div>
</div>

<Divider text="Projects"/>
<div id="projects" class="grid">
  {#each data.projects as project}
    <a href="/{project.slug}" class="col-12 col-md-6 col-xl-4">
      <img
        src="/images/{project.slug}/cover.png"
        alt={project.title}
        width="1920"
        height="1080"
        in:fade />
    </a>
  {/each}
</div>

<Divider text="Experience"/>
<div id="experiences">
  <Experience
    logo="/images/logos/ecomoni.svg"
    title="Software Engineer"
    company="Ecomoni"
    link="https://ecomoni.nl"
    duration="Sep 2022 - Present"
    description="Developing high-tech research tools for ecologists. Using edge computing and cloud infrastructure to improve the speed and scale of ecological research."
    tags={["Python", "AWS", "AI"]}
  />
  <Experience
    logo="/images/logos/aithenutrigene.svg"
    title="AI Engineer (Intern)"
    company="에이아이더뉴트리진"
    link="http://en.aithenutrigene.com/"
    duration="Sep 2021 - Jun 2022"
    description="Developing an image based search application for one of the companies clients. Started as an intern and continued working remotely for another six months."
    tags={["AI", "Python"]}
  />
  <Experience
    logo="/images/logos/proto{Math.random() < 0.5 ? 0 : 1}.svg"
    title="Secretary & Officer of Educational Affairs"
    company="S.A. Proto"
    link="https://proto.utwente.nl"
    duration="Sep 2020 - Aug 2021"
    description="Full time board at S.A. Proto, the study association of the Creative Technology BSc. and Interaction Technology MSc. programmes at the University of Twente."
    tags={["Management"]}
  />
  <Experience
    logo="/images/logos/utwente.jpg"
    title="Teaching Assistant"
    company="University of Twente"
    link="https://www.utwente.nl"
    duration="Sep 2019 - Aug 2021"
    description="Aiding bachelor students in subjects I passed. I have been a teaching assistant courses of the Creative Technology BSc. programme."
    tags={["Java", "Python"]}
  />
  <Experience
    logo="/images/logos/fledge.svg"
    title="Full-stack Developer"
    company="Fledge Solutions"
    link="https://fledge.nl"
    duration="Oct 2018 - Sep 2020"
    description="Expanding and modernizing the Fledge Enterprise Resource Planning (ERP) software with a web-based portal."
    tags={["PHP", "Javascript", "ERP"]}
  />
</div>

<style lang="sass">
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
