import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import MyPage from '../views/MyPage.vue'
import Qiita from '../views/Qiita.vue'
import Favorite from '../views/Favorite.vue'
import Cart from '../views/Cart.vue'
import Buy from '../views/Buy.vue'
import ItemDetail from '../views/ItemDetail.vue'
import AdminAdditem from '@/views/admin/AdminAddItem.vue'
import AdminItems from '@/views/admin/AdminItems.vue'

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
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/itemdetail/:item_id',
    name: 'ItemDetail',
    component: ItemDetail
  },
  {
    path: '/admin/additem',
    name: 'AdminAddItem',
    component: AdminAdditem
  },
  {
    path: '/admin/items',
    name: 'AdminItems',
    component: AdminItems
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
