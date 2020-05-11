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
      },
      {
        path: 'detail/1/:movieId',
        components: {
          default: () => import('../components/NowPlaying'),
          detail: () => import('../views/Movie/detail')
        },
        // 直接将参数传递过去 如果没有使用动态视图 可以直接props: true
        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        props: {
          detail: true
        }
      },
      {
        path: 'detail/2/:movieId',
        components: {
          default: () => import('../components/ComingSoon'),
          detail: () => import('../views/Movie/detail')
        },
        props: {
          detail: true
        }
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
  // base: process.env.BASE_URL,
  base: 'miaomiao',
  routes
})

export default router
