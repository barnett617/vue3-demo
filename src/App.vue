<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import '~@/common/style/reset';
html, body
  margin 0
  padding 0
  height 100%
#app {
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  height 100%
}
</style>
