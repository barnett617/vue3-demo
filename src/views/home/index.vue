<template>
  <div class="home">
    <header>
      <router-link :to="'/'">vue-next</router-link>
    </header>
    <main>
      <aside>
        <div class="nav" v-for="menu in menus" :key="menu.name">
          <div class="nav-has-children" v-if="menu.children && menu.children.length > 0">
            <p>{{menu.name}}</p>
            <ul>
              <li v-for="submenu in menu.children" :key="submenu.id">
                <router-link v-if="submenu.link" :to="submenu.link">{{submenu.name}}</router-link>
                <p v-else>{{submenu.name}}</p>
              </li>
            </ul>
          </div>
          <router-link class="nav-without-children" v-else :to="menu.link">{{menu.name}}</router-link>
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
        &-has-children
          ul
            padding 10px
    .content
      font-size 18px
</style>