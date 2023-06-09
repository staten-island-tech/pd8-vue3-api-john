import { createRouter, createWebHistory } from 'vue-router'
import cityView from '../views/City.vue'
import ComplaintType from '../views/ComplaintType.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/city',
      name: 'city',
      component: cityView
    },
    {
      path: '/complaint',
      name: 'complaint',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ComplaintType

    }
  ]
})

export default router
