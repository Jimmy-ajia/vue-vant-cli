<template>
  <page title="Qrcode组件-样式配置" style="text-align: center;">
    <qrcode
      text="vue-vant-cli"
      :options="{
        color: {
          dark: '#55D187',
          light: '#2d8cf0'
        }
      }"
    />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeStyle',
  components: {
    Qrcode
  }
}
</script>

<style>
</style>
