import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about')
  },
  {
    path: '/feature',
    name: 'feature',
    component: () => import(/* webpackChunkName: "feature" */ '../views/feature')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router