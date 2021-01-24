<template>
  <page title="RefreshLoad组件">
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="基于 vant 的 List 和 PullRefresh 二次封装全局 下拉刷新上拉加载 组件，便于统一维护和二次扩展。"
    />
    <van-cell-group>
      <van-cell title="基础示例" is-link to="/refresh-load-default" />
      <van-cell title="禁用上拉加载" is-link to="/refresh-load-refresh" />
      <van-cell title="禁用下拉刷新" is-link to="/refresh-load-load" />
      <van-cell title="暂无数据" is-link to="/refresh-load-empty" />
    </van-cell-group>
  </page>
</template>

<script>
export default {
  name: 'RefreshLoadDemo'
}
</script>

<style>
</style>
