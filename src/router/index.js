import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import HomeView from '@/views/HomeView.vue'
import ReservaView from '@/views/ReservaView'
import EditarView from '@/views/EditarView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/DashboardView',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/RegisterView',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/ReservaView',
    name: 'reserva',
    component: ReservaView
  },
  {
    path: '/EditarView',
    name: 'EditarView',
    component: EditarView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
