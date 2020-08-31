<template>
  <div class="vue3">
    <header class="navbar">
      <a href="/" class="home-link">
        <img src="/logo.png" alt="Vue.js" class="logo">
        <span class="site-name">Vue.js</span>
      </a>
      <div class="links" style="max-width: 1810px">
        <nav class="nav-links">
          <div class="nav-item">Docs</div>
          <div class="nav-item">API Reference</div>
          <div class="nav-item">Ecosystem</div>
          <div class="nav-item">Support Vue</div>
          <a href="https://github.com/vuejs/docs-next" target="_blank" class="repo-link">Github</a>
        </nav>
        <div id="docsearch">
          <button type="button" class="DocSearch DocSearch-Button" aria-label="Search"></button>
        </div>
      </div>
    </header>
    <aside class="sidebar">
      <ul class="sidebar-links">
        <li v-for="item in list" :key="item.id">
          <section class="sidebar-group">
            <p v-if="item.hasChidren" class="sidebar-heading">
              <span>{{item.name}}</span>
            </p>
            <ul class="sidebar-links sidebar-group-items">
              <li v-for="child in item.children" :key="child.id">
                <router-link :to="child.link">{{child.name}}</router-link>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </aside>
    <main class="page"></main>
  </div>
</template>

<script>
import { getVue3Menus } from '@/api'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const data = await getVue3Menus()
      this.list = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.vue3
  .navbar
    position fixed
    z-index 20px
    top 0
    left 0
    right 0
    height 3.6rem
    background-color #fff
    box-sizing border-box
    border-bottom 1px solid #eaecef
    padding .7rem 1.5rem
    line-height 2.2rem
    .logo
      height 2.2rem
      min-width 2.2rem
      margin-right .5rem
      vertical-align top
    .site-name
      font-size 1.3rem
      font-weight 1.3rem
    a
      display inline-block
    .links
      padding-left 1.5rem
      box-sizing border-box
      background-color #fff
      white-space nowrap
      font-size .9rem
      position absolute
      right 1.5rem
      top .7rem
      display flex
      .nav-links
        .nav-item
          position relative
          display inline-block
          margin-left 1.5rem
          line-height 2rem
        .repo-link
          margin-left 1.5rem
  .sidebar
    background-color #fff
    width 20rem
    position fixed
    z-index 10
    margin 0
    top 3.6rem
    left 0
    bottom 0
    box-sizing border-box
    border-right 1px solid #eaecef
    overflow-y auto
    .sidebar-links
      padding 1.5rem 0
    ul
      margin 0
  .page
    padding-left 20rem
    padding-bottom 2rem
.DocSearch
  --docsearch-primary-color #42b983
  --docsearch-highlight-color var(--docsearch-primary-color)
  --docsearch-searchbox-shadow inset 0 0 0 2px var(--docsearch-primary-color)
.DocSearch-Button
  align-items center
  background var(--docsearch-searchbox-background)
  border 0
  border-radius 40px
  color var(--docsearch-muted-color)
  cursor pointer
  display flex
  font-weight 500
  height 36px
  margin 0 0 0 16px
  padding 0 8px
  user-select none
</style>