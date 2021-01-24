<template>
  <page title="Qrcode组件-img标签" style="text-align: center;">
    <qrcode text="vue-vant-cli" tag="img" />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeImg',
  components: {
    Qrcode
  }
}
</script>

<style>
</style>
