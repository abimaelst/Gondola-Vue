import {
  createRouter,
  createWebHistory
} from 'vue-router'
import EventCreate from '../views/EventCreate'
import EventList from '../views/EventList'
import EventShow from '../views/EventShow'


const routes = [{
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/show/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/event',
    name: 'event-create',
    component: EventCreate
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router