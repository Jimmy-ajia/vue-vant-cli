<template>
  <page title="编辑">
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
import { getDetApi, setApi } from './api'
export default {
  name: 'ExampleEdit',
  data() {
    return {
      form: {
        id: this.$route.query.id,
        author: ''
      }
    }
  },
  created() {
    this.$pageLoaing(() => {
      this.getDet()
    })
  },
  methods: {
    async getDet() {
      const res = await getDetApi({
        params: {
          id: this.$route.query.id
        }
      })
      if (res) {
        this.form.author = res.data.author
      }
    },
    async onSubmit(values) {
      this.$pageLoaing(async() => {
        const res = await setApi({
          data: this.form
        })
        if (res) {
          this.$bus.$emit('update', this.form, this.$route.query.index)
          this.$toast.success({
            message: '编辑成功',
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
