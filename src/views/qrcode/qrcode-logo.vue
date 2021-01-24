<template>
  <page title="Qrcode组件-logo设置" style="text-align: center;">
    <qrcode
      text="vue-vant-cli"
      :logo="require('@/assets/img/logo.png')"
    />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeLogo',
  components: {
    Qrcode
  }
}
</script>

<style>
</style>
