import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Items from '../views/Items.vue'
import MyPage from '../views/MyPage.vue'
import Qiita from '../views/Qiita.vue'
import Favorite from '../views/Favorite.vue'
import Admin from '@/views/admin/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: MyPage
  },
  {
    path: '/qiita',
    name: 'Qiita',
    component: Qiita
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
