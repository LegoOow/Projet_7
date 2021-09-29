import { createRouter, createWebHistory } from 'vue-router'
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
  },
  {
    path: '/homeuser',
    name: 'HomeUser',

    component: () => import('../views/HomeUser.vue')
  },
  {
    path:'/useraccount',
    name: 'UserAccount',

    component: () => import('../views/UserAccount.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
