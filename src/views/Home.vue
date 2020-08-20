<template>
  <div class="home">
    <header>vue-next</header>
    <main>
      <aside>
        <div class="nav" v-for="menu in menus" :key="menu.name">
          <router-link :to="menu.link">{{menu.name}}</router-link>
        </div>
      </aside>
      <div class="content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { getMenus } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      menus: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const menus = await getMenus()
      if (menus && menus.length) {
        menus.map(item => {
          item.link = '/' + item.link
          return item
        })
      }
      this.menus = menus
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  height 100%
  width 100%
  display flex
  flex-direction column
  header
    padding 20px
    text-align center
    font-weight 600
    font-size 20px
  main
    display flex
    aside
      .nav
        display flex
        flex-direction column
        font-size 18px
        padding 10px
    .content
      font-size 18px
</style>