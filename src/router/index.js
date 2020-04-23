import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movie/nowPlaying' },
  { path: '/movie', redirect: '/movie/nowPlaying' },
  { path: '/cinema', redirect: '/cinema/quancheng' },
  {
    path: '/movie',
    component: () => import('../views/Movie'),
    children: [
      {
        path: 'city',
        component: () => import('../components/City')
      },
      {
        path: 'nowPlaying',
        component: () => import('../components/NowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('../components/ComingSoon')
      },
      {
        path: 'search',
        component: () => import('../components/Search')
      }
    ]
  },
  { path: '/mine', component: () => import('../views/Mine') },
  {
    path: '/cinema',
    component: () => import('../views/Cinema'),
    children: [
      {
        path: 'quancheng',
        component: () => import('../components/Quancheng')
      },
      {
        path: 'pinpai',
        component: () => import('../components/Pinpai')
      },
      {
        path: 'tese',
        component: () => import('../components/Tese')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
