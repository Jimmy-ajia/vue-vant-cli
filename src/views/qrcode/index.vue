<template>
  <page title="Qrcode组件">
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="基于 qrcode.js 二次封装全局 二维码 组件。"
    />
    <van-cell-group>
      <van-cell title="基础示例" is-link to="/qrcode-default" />
      <van-cell title="img标签" is-link to="/qrcode-img" />
      <van-cell title="样式配置" is-link to="/qrcode-style" />
      <van-cell title="二维码点击" is-link to="/qrcode-click" />
      <van-cell title="异步内容" is-link to="/qrcode-async" />
      <van-cell title="二维码失效" is-link to="/qrcode-disabled" />
      <van-cell title="logo设置" is-link to="/qrcode-logo" />
      <van-cell title="logo样式设置" is-link to="/qrcode-logo-style" />
      <van-cell title="大小设置" is-link to="/qrcode-size" />
    </van-cell-group>
  </page>
</template>

<script>
export default {
  name: 'QrcodeDemo'
}
</script>

<style>
</style>
