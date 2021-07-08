import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/menu/:productName',
    name: 'menu',
    component: Menu,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'active-link'
})

export default router
