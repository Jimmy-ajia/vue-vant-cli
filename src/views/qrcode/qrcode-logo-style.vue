<template>
  <page title="Qrcode组件-logo样式设置" style="text-align: center;">
    <qrcode
      text="vue-vant-cli"
      :logo="{
        src: require('@/assets/img/logo.png'),
        logoSize: 0.2,
        borderSize: 0.05,
        borderRadius: 50,
        bgColor: 'blue'
      }"
    />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeLogoStyle',
  components: {
    Qrcode
  }
}
</script>

<style>
</style>
