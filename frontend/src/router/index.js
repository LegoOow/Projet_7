import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
