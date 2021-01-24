<template>
  <page title="Qrcode组件-大小设置" style="text-align: center;">
    <qrcode
      text="vue-vant-cli"
      :width="300"
    />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeSize',
  components: {
    Qrcode
  }
}
</script>

<style>
</style>
