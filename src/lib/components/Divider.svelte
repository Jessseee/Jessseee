<script>
  export let text;

  const textLength = text.length
</script>

<div class="divider">
  <div style:width="calc(50% - {textLength/2}rem)"></div>
  <h2>{text}</h2>
  <div style:width="calc(50% - {textLength/2}rem)"></div>
</div>

<style lang="sass">

  .divider
    margin-bottom: 0.5rem
    text-align: center
    div
      display: inline-block
      background-color: #555
      margin-bottom: 0.4rem
      height: 2px

    h2
      margin-left: 0.75rem
      margin-right: 0.5rem
      display: inline-block
</style>
