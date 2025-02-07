<script>
  import Experience from '$lib/components/Experience.svelte';
  import Divider from '$lib/components/Divider.svelte';
</script>

<div id="about" class="grid text-center">
  <div class="col-center-8 col-center-md-6">
    <h2>About Me</h2>
    <p>
      I consider myself a Creative Technologist. I like to tinker around and learn new skills. I
      have gained experience in various fields, from game development to artificial intelligence and
      look forward to keep learning.
    </p>
  </div>
  <div class="col-4 col-offset-md-7 col-md-3 display-none">
    <img id="profile" src="/media/images/profile.jpg" alt="That's me!" />
  </div>
</div>

<Divider text="Experience" />
<div id="experiences" class="grid">
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/ecomoni.svg"
    title="Software Engineer"
    company="Ecomoni"
    link="https://ecomoni.nl"
    duration="Sep 2022 - Present"
    description="Developing high-tech research tools for ecologists. Using edge computing and cloud infrastructure to improve the speed and scale of ecological research."
    tags={['Python', 'AWS', 'AI']} />
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/nationaal_archief.png"
    title="AI Engineer (Intern)"
    company="Nationaal Archief"
    link="https://nationaalarchief.nl"
    duration="Sep 2024 - Jan 2025"
    description="Working on detecting semantic layout information in historical documents and exploring the use of Retrieval Augmented Generation for various archives." />
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/aithenutrigene.svg"
    title="AI Engineer (Intern)"
    company="에이아이더뉴트리진"
    link="http://en.aithenutrigene.com/"
    duration="Sep 2021 - Jun 2022"
    description="Developing an image based search application for one of the companies clients. Started as an intern and continued working remotely for another six months."
    tags={['AI', 'Python']} />
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/proto{Math.random() < 0.5 ? 0 : 1}.svg"
    title="Secretary & Officer of Educational Affairs"
    company="S.A. Proto"
    link="https://proto.utwente.nl"
    duration="Sep 2020 - Aug 2021"
    description="Full time board at S.A. Proto, the study association of the Creative Technology BSc. and Interaction Technology MSc. programmes at the University of Twente."
    tags={['Management']} />
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/utwente.jpg"
    title="Teaching Assistant"
    company="University of Twente"
    link="https://www.utwente.nl"
    duration="Sep 2019 - Aug 2021"
    description="Aiding bachelor students in subjects I passed. I have mostely been a teaching assistant in courses of the Creative Technology BSc. programme."
    tags={['Java', 'Python']} />
  <Experience
    class="col-10 col-md-6"
    logo="/media/images/logos/fledge.svg"
    title="Full-stack Developer"
    company="Fledge Solutions"
    link="https://fledge.nl"
    duration="Oct 2018 - Sep 2020"
    description="Expanding and modernizing the Fledge Enterprise Resource Planning (ERP) software with a web-based portal."
    tags={['PHP', 'Javascript', 'ERP']} />
</div>

<Divider text="Education" />
<div id="education">
  <Experience
    logo="/media/images/logos/utwente.jpg"
    title="MSc. Interaction Technology"
    company="University of Twente"
    duration="Feb 2023 - Jul 2025"
    description="Learn how to design intelligent, interactive and socially aware systems that are aligned with end-user needs and can enhance user experience." />
  <Experience
    logo="/media/images/logos/utwente.jpg"
    title="BSc. Creative Technology"
    company="University of Twente"
    duration="Sep 2020 - Feb 2023"
    description="Combining computer science, electrical engineering and industrial design; with emphasis on human computer interaction, prototyping and creative problem solving." />
</div>

<Divider text="Skills & Abilities" />
<div id="skills" class="grid">
  <div class="col-4">
    <h3>Hard skills:</h3>
    <ul>
      <li>Fast prototyping</li>
      <li>Full-stack development</li>
      <li>Machine learning</li>
    </ul>
  </div>
  <div class="col-4">
    <h3>Soft Skills:</h3>
    <ul>
      <li>Creative problem solving</li>
      <li>Collaborative work</li>
      <li>Management</li>
    </ul>
  </div>
  <div class="col-4">
    <h3>Languages</h3>
    <ul>
      <li>Dutch - Native</li>
      <li>Frisian - Native</li>
      <li>English</li>
    </ul>
  </div>
</div>

<style lang="sass">
  p
    max-width: 650px
  div
    align-items: start
  ul
    padding-left: 1.25rem
  li
    margin-bottom: 0.75rem
</style>
