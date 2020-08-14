<template>
  <div class="home">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.home
  padding 20px
  .nav
    font-size 18px
</style>