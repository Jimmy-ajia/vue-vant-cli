import Vue from 'vue'

// 按需引入
import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  NoticeBar,
  Cell,
  CellGroup,
  Loading,
  Icon,
  Toast,
  PullRefresh,
  List,
  Empty,
  SwipeCell,
  Dialog,
  Form,
  Field,
  DatetimePicker,
  Popup
} from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Loading)
Vue.use(Icon)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Empty)
Vue.use(SwipeCell)
Vue.use(Form)
Vue.use(Field)
Vue.use(DatetimePicker)
Vue.use(Popup)

Toast.setDefaultOptions({
  duration: 2000,
  forbidClick: true
})

Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog
