<template>
  <page title="Qrcode组件-异步内容" style="text-align: center;">
    <qrcode :text="text" />
  </page>
</template>

<script>
import Qrcode from '_c/Qrcode'
export default {
  name: 'QrcodeAsync',
  components: {
    Qrcode
  },
  data() {
    return {
      text: ''
    }
  },
  created() {
    setTimeout(() => {
      this.text = 'vue-vant-cli'
    }, 3000)
  }
}
</script>

<style>
</style>
