<template>
  <div class="about">
    <header>
      <h2>lifecycle vue2 vs. vue3</h2>
    </header>
    <div class="wrap">
      <div class="img-wrap">
        <span>vue2</span>
        <img :src="vue2" alt="">
      </div>
      <div class="img-wrap">
        <span>vue3</span>
        <img :src="vue3" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import vue2 from './images/vue2.png'
import vue3 from './images/vue3.png'
export default {
  data() {
    return {
      vue2: vue2,
      vue3: vue3
    }
  }
}
</script>
<style lang="stylus" scoped>
.about
  header
    text-align center
  .wrap
    display flex
    justify-content center
    .img-wrap
      height 60%
      display flex
      flex-direction column
      align-items center
      img
        width 100%
        height 100%
</style>