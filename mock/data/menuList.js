export default {
  data: [
    {
      link: '/home/about',
      id: 'lifecycle',
      name: '生命周期'
    },
    {
      link: '/home/feature',
      id: 'feature',
      name: '特性'
    },
    {
      link: '/home/component',
      id: 'component',
      name: '组件'
    },
    {
      link: '/home/animation',
      id: 'animation',
      name: '动画'
    },
    {
      link: '/home/composition',
      id: 'composition',
      name: '组合'
    },
    {
      id: 'advanced',
      name: '高级特性',
      children: [
        {
          id: 'reactivity',
          name: '响应式'
        }
      ]
    },
    {
      link: '/home/tool',
      id: 'tool',
      name: '工具'
    },
    {
      link: '/home/scale',
      id: 'scale',
      name: '规模化'
    },
    {
      link: '/home/accessbility',
      id: 'accessbility',
      name: '可达性'
    },
    {
      link: '/home/migaration',
      id: 'migaration',
      name: '迁移'
    },
    {
      id: 'other',
      name: '其他',
      // link: '/other',
      children: [
        {
          link: '/other/figure',
          id: 'other-figure',
          name: 'figure'
        },
        {
          // link: '/other/google',
          id: 'other-google',
          name: 'google'
        },
        {
          // link: '/other/vue3',
          id: 'other-vue3',
          name: 'vue3'
        }
      ]
    },
  ]
}
