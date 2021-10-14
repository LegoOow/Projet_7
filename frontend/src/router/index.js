import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import auth from '../middleware/auth'
import VueRouteMiddleware from 'vue-route-middleware'

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

    component: () => import('../views/HomeUser.vue'),
    meta: {
      middleware: auth
    }
  },
  {
    path:'/useraccount',
    name: 'UserAccount',

    component: () => import('../views/UserAccount.vue'),
    meta: {
      middleware: auth
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(VueRouteMiddleware())

export default router
