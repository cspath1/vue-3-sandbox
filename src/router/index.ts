import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello-world-one',
    name: 'HelloWorldOne',
    component: () => import(/* webpackChunkName: "helloworldone" */ '../views/HelloWorldOne.vue')
  },
  {
    path: '/hello-world-two',
    name: 'HelloWorldTwo',
    component: () => import(/* webpackChunkName: "helloworldtwo" */ '../views/HelloWorldTwo.vue')
  },
  {
    path: '/hello-world-refactored',
    name: 'HelloWorldRefactored',
    component: () => import(/* webpackChunkName: "helloworldone" */ '../views/HelloWorldRefactored.vue')
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
  routes
})

export default router
