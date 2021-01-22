import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('_v/home')
  },
  {
    path: '/page-demo',
    name: 'PageDemo',
    component: () => import('_v/page')
  },
  {
    path: '/page-default',
    name: 'PageDefault',
    component: () => import('_v/page/page-default')
  },
  {
    path: '/page-footer',
    name: 'PageDefaultFooter',
    component: () => import('_v/page/page-footer')
  },
  {
    path: '/page-little-footer',
    name: 'PageLittleFooter',
    component: () => import('_v/page/page-little-footer')
  },
  {
    path: '/tabbar-demo',
    name: 'TabbarDemo',
    component: () => import('_v/tabbar')
  },
  {
    path: '/tabbar-default',
    name: 'TabbarDefalut',
    component: () => import('_v/tabbar/tabbar-default')
  }
]

const router = new VueRouter({
  routes
})

export default router
