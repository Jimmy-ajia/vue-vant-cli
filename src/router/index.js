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
  },
  {
    path: '/qrcode-demo',
    name: 'QrcodeDemo',
    component: () => import('_v/qrcode')
  },
  {
    path: '/qrcode-default',
    name: 'QrcodeDefault',
    component: () => import('_v/qrcode/qrcode-default')
  },
  {
    path: '/qrcode-img',
    name: 'QrcodeImg',
    component: () => import('_v/qrcode/qrcode-img')
  },
  {
    path: '/qrcode-style',
    name: 'QrcodeStyle',
    component: () => import('_v/qrcode/qrcode-style')
  },
  {
    path: '/qrcode-click',
    name: 'QrcodeClick',
    component: () => import('_v/qrcode/qrcode-click')
  },
  {
    path: '/qrcode-async',
    name: 'QrcodeAsync',
    component: () => import('_v/qrcode/qrcode-async')
  },
  {
    path: '/qrcode-disabled',
    name: 'QrcodeDisabled',
    component: () => import('_v/qrcode/qrcode-disabled')
  },
  {
    path: '/qrcode-logo',
    name: 'QrcodeLogo',
    component: () => import('_v/qrcode/qrcode-logo')
  },
  {
    path: '/qrcode-logo-style',
    name: 'QrcodeLogoStyle',
    component: () => import('_v/qrcode/qrcode-logo-style')
  },
  {
    path: '/qrcode-size',
    name: 'QrcodeSize',
    component: () => import('_v/qrcode/qrcode-size')
  },
  {
    path: '/refresh-load',
    name: 'RefreshLoadDemo',
    component: () => import('_v/refresh-load')
  },
  {
    path: '/refresh-load-default',
    name: 'RefreshLoadDefault',
    component: () => import('_v/refresh-load/refresh-load-default')
  },
  {
    path: '/refresh-load-refresh',
    name: 'RefreshLoadRefresh',
    component: () => import('_v/refresh-load/refresh-load-refresh')
  },
  {
    path: '/refresh-load-load',
    name: 'RefreshLoadLoad',
    component: () => import('_v/refresh-load/refresh-load-load')
  },
  {
    path: '/refresh-load-empty',
    name: 'RefreshLoadEmpty',
    component: () => import('_v/refresh-load/refresh-load-empty')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('_v/example')
  },
  {
    path: '/example-edit',
    name: 'ExampleEdit',
    component: () => import('_v/example/example-edit')
  },
  {
    path: '/example-add',
    name: 'ExampleAdd',
    component: () => import('_v/example/example-add')
  }
]

const router = new VueRouter({
  routes
})

export default router
