<template>
  <page title="Tabbar组件">
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="由于 vant 的 Tabbar 组件不支持过渡动画的属性，为了方便扩展，对 vant 的 Tabbar 与 Swipe 组件进行二次封装，主要实现了过渡动画，并且支持 Tabbar 的所有 props。"
    />
    <van-cell-group>
      <van-cell title="基础示例" is-link to="/tabbar-default" />
    </van-cell-group>
  </page>
</template>

<script>
export default {
  name: 'TabbarDemo'
}
</script>

<style>
</style>
