<template>
  <div class="advanced">
    <ul>
      <li v-for="item of list" :key="item.id">
        <a href="">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { getAdvanced } from '@/api'
export default {
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await getAdvanced()
      this.list = res
    }
  },
  data() {
    return {
      list: []
    }
  }
}
</script>