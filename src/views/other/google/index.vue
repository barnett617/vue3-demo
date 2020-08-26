<template>
  <div class="google">
    <header class="uni-header">
      <div class="uni-header__hamburguer-wrapper"></div>
      <figure>
        <svg role="img">
          <iframe src="./image/icon.svg" frameborder="0"></iframe>
        </svg>
      </figure>
      <div class="uni-header__site_title">
        <a href="/" class="uni-header__site-title-link">
          <span>The Keyword</span>
        </a>
      </div>
      <nav class="uni-navigation" role="navigation">
        <div class="uni-navigation__list">
          <ul id="uni-main-menu" class="uni-main-menu" data-component="uni-navigation">
            
          </ul>
        </div>
      </nav>
    </header>
    <h2>google</h2>
  </div>
</template>

<style lang="stylus" scoped>
.google
  .uni-header
    height 64px
    background-color: #fff
    justify-content flex-start
    position fixed
    left 0
    right 0
    top 0
    transform translateY(0)
    transition transform .15s ease-out
    z-index 10
</style>