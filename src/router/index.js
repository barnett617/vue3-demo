import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home'

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'root',
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about')
      },
      {
        path: 'feature',
        name: 'feature',
        component: () => import(/* webpackChunkName: "feature" */ '../views/feature')
      },
      {
        path: 'component',
        name: 'component',
        component: () => import(/* webpackChunkName: "component" */ '../views/component')
      },
      {
        path: 'animation',
        name: 'animation',
        component: () => import(/* webpackChunkName: "animation" */ '../views/animation')
      },
      {
        path: 'composition',
        name: 'composition',
        component: () => import(/* webpackChunkName: "composition" */ '../views/composition')
      },
      {
        path: 'advanced',
        name: 'advanced',
        component: () => import(/* webpackChunkName: "composition" */ '../views/advanced')
      },
      {
        path: 'tool',
        name: 'tool',
        component: () => import(/* webpackChunkName: "tool" */ '../views/tool')
      },
      {
        path: 'scale',
        name: 'scale',
        component: () => import(/* webpackChunkName: "scale" */ '../views/scale')
      },
      {
        path: 'accessbility',
        name: 'accessbility',
        component: () => import(/* webpackChunkName: "accessbility" */ '../views/accessbility')
      },
      {
        path: 'migaration',
        name: 'migaration',
        component: () => import(/* webpackChunkName: "migaration" */ '../views/migaration')
      },
    ]
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/other'),
    children: [
      {
        path: 'figure',
        name: 'figure',
        component: () => import('../views/other/figure')
      },
      {
        path: 'google',
        name: 'google',
        component: () => import('../views/other/google')
      },
      {
        path: 'vue3',
        name: 'vue3',
        component: () => import('../views/other/vue3')
      },
      {
        path: 'clickout',
        name: 'clickOutside',
        component: () => import('../views/other/demo/click-outside')
      },
    ]
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/about')
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router