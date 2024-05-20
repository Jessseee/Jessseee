<script>
  const tagColors = {
    "PHP": "#4d588e",
    "Javascript": "hsl(54, 83%, 53%)",
    "Java": "#f0931c",
    "Python": "#366c9c",
    "AWS": "#ff9800",
    "AI": "#213f6c",
  }

  export let logo
  export let link
  export let title
  export let company
  export let duration
  export let description
  export let tags = []
</script>

<div class="experience grid">
  <div class="col-1 col-md-3">
    <a href="{link}" target="_blank">
      <img src="{logo}" alt="">
    </a>
  </div>
  <div class="col-10 col-md-6">
    <h3>{title} <span style:color="#aaa">@</span> <a href="{link}" target="_blank">{company}</a></h3>
    <p class="duration">{duration}</p>
    <p>{description}</p>
    <div class="tags">
      {#each tags as tag}
        <span class="tag" style:background-color={tagColors[tag]}>{tag}</span>
      {/each}
    </div>
  </div>
</div>

<style lang="sass">
  .experience
    align-items: start
    justify-items: end
    margin-bottom: 2rem
    img
      height: 50px
      width: 50px
      background: #ffffff
      padding: 0.5rem
    h3
      margin-bottom: 0
      a
        color: inherit
        white-space: nowrap
    .duration
      margin-top: 0.25rem
      font-weight: 600
      color: #999
    .tags
      .tag
        background-color: #2196f3
        padding: 0.15rem 1.5rem
        color: #ffffff
        font-weight: 600
        border-radius: 1rem
        margin-right: 0.75rem
        margin-bottom: 0.5rem
        white-space: nowrap
        display: inline-block
</style>
