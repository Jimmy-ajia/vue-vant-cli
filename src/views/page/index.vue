<template>
  <page title="Page组件">
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="基于 vant 的 NavBar 二次封装全局 Page 组件，支持 NavBar 的所有 props 与 事件，便于统一维护和二次扩展。"
    />
    <van-cell-group>
      <van-cell title="基础示例" is-link to="/page-default" />
      <van-cell title="自带页脚" is-link to="/page-footer" />
      <van-cell title="内容不够时页脚自动固定在底部" is-link to="/page-little-footer" />
    </van-cell-group>
  </page>
</template>

<script>
export default {
  name: 'PageDemo'
}
</script>

<style>
</style>
