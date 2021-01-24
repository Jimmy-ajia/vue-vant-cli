<template>
  <page title="Qrcode组件-二维码失效" style="text-align: center;">
    <qrcode text="vue-vant-cli" :disabled="true" @disabled-click="disabledClick" />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeDisabled',
  components: {
    Qrcode
  },
  methods: {
    disabledClick() {
      this.$toast('失效被点击')
    }
  }
}
</script>

<style>
</style>
