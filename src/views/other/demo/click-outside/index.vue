<template>
  <div class="click-outside">
    <div class="main" v-clickOut="handleClickout">
      <input @focus="handleFocus" type="text" name="" id="">
      <div class="block" v-if="showBlock"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showBlock: false
    }
  },
  methods: {
    handleFocus() {
      this.showBlock = true
    },
    handleClickout() {
      if (this.showBlock) {
        this.showBlock = false
      }
    }
  },
  directives: {
    clickOut: {
      mounted: (el, binding) => {
        console.log('binding', binding)
        console.log('el', el)
        let value = binding.value
        if (value && typeof value === 'function') {
          el['clickOut'] = () => {
            console.log('event', event)
            const target = event.target
            console.log('el.contains(target)', el.contains(target))
            if (el !== target && !el.contains(target)) {
              value()
            }
          }
          document.addEventListener("click", el["clickOut"], false)
        }
      },
      unmounted: el => {
        console.log('unmounted el', el)
        if (el["clickOut"]) {
          document.removeEventListener("click", el["clickOut"], false)
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.click-outside
  height 100%
  .main
    background-color #ccc
    display flex
    margin-top 100px
    align-items center
    flex-direction column
    .block
      width 400px
      height 300px
      background #e0e0e0
</style>