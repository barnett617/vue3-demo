<template>
  <div class="home">
    <div class="nav">
      <router-link to="/about">lifecycle</router-link>
      <router-link to="/feature">feature</router-link>
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
    display flex
    flex-direction column
    font-size 18px
</style>