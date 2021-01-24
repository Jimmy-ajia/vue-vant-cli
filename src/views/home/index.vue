<template>
  <page :show-nav="false" :padding-top="0">
    <tabbar v-model="active" :tabbar-list="tabbarList">
      <tabbar-item>
        <van-notice-bar
          :scrollable="false"
          wrapable
        >
          一套基于vue2.x + vant2.x的移动端集成方案，内置多种常用组件，开箱即用。
        </van-notice-bar>
        <van-cell-group title="指南">
          <van-cell title="文档" is-link url="https://www.baidu.com" />
          <van-cell title="github" is-link url="https://github.com/kailong321200875/vue-vant-cli" />
        </van-cell-group>
      </tabbar-item>
      <tabbar-item>
        <van-cell-group title="全局组件">
          <van-cell title="Page组件" is-link to="/page-demo" />
        </van-cell-group>
        <van-cell-group title="功能组件">
          <van-cell title="Tabbar组件" is-link to="/tabbar-demo" />
          <van-cell title="Qrcode组件" is-link to="/qrcode-demo" />
          <van-cell title="RefreshLoad组件" is-link to="/refresh-load" />
        </van-cell-group>
        <van-cell-group title="综合示例">
          <van-cell title="列表增删改" is-link to="/example" />
        </van-cell-group>
      </tabbar-item>
    </tabbar>
  </page>
</template>

<script>
import { Tabbar, TabbarItem } from '_c/Tabbar'
export default {
  name: 'Home',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 'doc',
      tabbarList: [
        {
          label: '指南',
          name: 'doc',
          icon: 'coupon-o'
        },
        {
          label: '组件',
          name: 'component',
          icon: 'apps-o'
        }
      ]
    }
  }
}
</script>

<style>
</style>
