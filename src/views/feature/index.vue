<template>
  <div class="feature">
    <ul v-for="item of list" :key='item.id'>
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import { getFeatureList } from '@/api'
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
      try {
        const list = await getFeatureList()
        console.log('list', list)
        this.list = list
      } catch (e) {
        console.log('api error:', e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.feature
  padding 20px
  li
    padding 10px
</style>