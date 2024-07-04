import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstView from '@/views/FirstView.vue'
import SecondView from '@/views/SecondView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/view1',
    name: 'view1',
    component: FirstView,
  },
  {
    path: '/view2',
    name: 'view2',
    component: SecondView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
