<nav>
  <a href="/" class="logo">
    <img src="/images/logo.png" alt="website logo" aria-hidden="true" />
  </a>
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

  .logo
    margin-left: 10px
    display: block
    width: 55px
    transition: transform 200ms
    &:hover
      transform: scale(1.1)
</style>
