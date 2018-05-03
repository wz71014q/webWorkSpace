import Vue from 'vue'
import Router from 'vue-router'
import Stone from 'vue-stone'
import 'vue-stone/dist/vue-stone.css'
import MainPage from '@/components/MainPage'
import AllFruit from '@/components/AllFruit'
import AppointmentPage from '@/components/AppointmentPage'

Vue.use(Router)
Vue.use(Stone)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/',
          name: 'AllFruit',
          component: AllFruit
        },
        {
          path: '/AppointmentPage',
          name: 'AppointmentPage',
          component: AppointmentPage
        }
      ]
    }
  ]
})
