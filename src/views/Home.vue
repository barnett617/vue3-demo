<template>
  <div class="home">
    <div class="nav" v-for="menu in menus" :key="menu.name">
      <router-link :to="menu.link">{{menu.name}}</router-link>
    </div>
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
  padding 20px
  .nav
    display flex
    flex-direction column
    font-size 18px
    padding 10px
</style>