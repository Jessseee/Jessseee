<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import slugify from '$lib/scripts/slugify';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faGlobe } from '@fortawesome/free-solid-svg-icons';
  import IconLink from '$lib/components/IconLink.svelte';

  export let data;

  let headings = [];
  onMount(async () => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5'));
    elements.forEach((el) => (el.id = slugify(el.innerHTML)));
    headings = elements.reduce((acc, cur) => {
      acc.push({
        text: cur.innerHTML,
        depth: parseInt(cur.tagName.substring(1)),
        id: cur.id,
      });
      return acc;
    }, []);
  });
</script>

<svelte:head>
  <title>Jesse Visser | {data.meta.title}</title>
</svelte:head>

<img class="header" src="/images/{data.slug}/cover.png" alt={data.meta.title} height="300" />

{#if data.meta.url}
  <div class="repo-link">
    Check out <b>{data.meta.title}</b> on
    {#if data.meta.url.hostname === 'github.com'}
      <IconLink icon={faGithub} bgColor="#fcc300" color="#ffffff" href={data.meta.url.href}>
        Github
      </IconLink>
    {:else}
      <IconLink icon={faGlobe} bgColor="#4682b4ff" color="#ffffff" href={data.meta.url.href}>
        {data.meta.url.hostname}
      </IconLink>
    {/if}
  </div>
{/if}

{#if headings.length > 0}
  <ul class="index" in:fly={{ y: headings.length * 10, duration: 500 }}>
    {#each headings as heading}
      <li class="indent-{heading.depth}"><a href="#{heading.id}">{heading.text}</a></li>
    {/each}
  </ul>
{/if}

<div class="content">
  <svelte:component this={data.content} />
</div>

<style lang="sass">
  @import "$lib/styles/variables.sass"

  .header
    width: 100%
    height: 20vh
    min-height: 300px
    object-fit: cover
    transition: height 200ms

  .repo-link
    margin-top: 10px
    float: right

  .content
    text-align: justify
    max-width: 650px
    margin-left: auto
    margin-right: auto
    margin-bottom: 2em

  .index
    padding-top: 1.5em
    margin-left: -4.5em
    list-style: none
    line-height: 1.5em
    @include break("lg")
      margin-bottom: 3em
      margin-left: -1em
      position: fixed
      left: 0
      bottom: 0

  @for $i from 1 through 5
    .indent-#{$i}
      text-indent: #{$i}em
</style>
