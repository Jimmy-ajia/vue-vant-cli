<template>
  <page title="新增">
    <van-form @submit="onSubmit">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="form.author"
        name="author"
        label="标题"
        placeholder="请填写标题"
        :rules="[{ required: true, message: '该项为必填项' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </page>
</template>

<script>
import { setApi } from './api'
export default {
  name: 'ExampleAdd',
  data() {
    return {
      form: {
        id: '',
        author: ''
      }
    }
  },
  methods: {
    async onSubmit(values) {
      this.$pageLoaing(async() => {
        const res = await setApi({
          data: this.form
        })
        if (res) {
          this.$bus.$emit('add')
          this.$toast.success({
            message: '新增成功',
            onClose: () => {
              this.$router.go(-1)
            }
          })
        }
      }, { message: '数据提交中...', always: true })
    }
  }
}
</script>

<style>
</style>
