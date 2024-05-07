import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const About = () => import('../views/about/About')
const DownLoad = () => import('../views/download/DownLoad')
const Goods = () => import('../views/goods/Goods')
const News = () => import('../views/news/News')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/download',
    component: DownLoad
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/news',
    component: News
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
