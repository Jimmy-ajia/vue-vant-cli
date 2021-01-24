<template>
  <page title="Qrcode组件-二维码点击" style="text-align: center;">
    <qrcode
      text="vue-vant-cli"
      @click="codeClick"
    />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeClick',
  components: {
    Qrcode
  },
  methods: {
    codeClick() {
      this.$toast('我被点击了')
    }
  }
}
</script>

<style>
</style>
