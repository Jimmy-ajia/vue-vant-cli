<template>
  <van-pull-refresh
    v-model="refresh"
    :disabled="!showRefresh"
    success-text="刷新成功"
    @refresh="onRefresh"
  >
    <van-list
      v-if="showLoad"
      v-model="load"
      :offset="80"
      :finished="finished"
      :error.sync="error"
      :error-text="errorText"
      :finished-text="listData.length ? finishedText : ''"
      @load="onLoad"
    >
      <slot v-if="listData.length && (isRequest || !showLoad)" />
      <van-empty v-else-if="!listData.length && isRequest" description="暂无数据" />
    </van-list>
    <div v-else>
      <slot v-if="listData.length && (isRequest || !showLoad)" />
      <van-empty v-else-if="!listData.length && isRequest" description="暂无数据" />
    </div>
  </van-pull-refresh>
</template>

<script>
export default {
  name: 'RefreshLoad',
  props: {
    showLoad: {
      type: Boolean,
      default: true
    },
    showRefresh: {
      type: Boolean,
      default: true
    },
    getFunction: {
      type: Function,
      default: () => null
    },
    listData: {
      type: Array,
      default: null
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // 是否刷新
      refresh: false,

      // 是否加载
      load: false,

      // 是否完成加载
      finished: false,

      // 是否请求失败
      error: false,

      errorText: '请求失败，点击重新加载',

      finishedText: '我是有底线的~',

      isRequest: false // 是否请求过
    }
  },
  watch: {
    listData: {
      handler: function(arr) {
        if (arr.length === this.total) {
          this.finished = true
        } else {
          this.finished = false
        }
      },
      deep: true
    }
  },
  methods: {
    async getList(isMore, error) {
      if (typeof this.getFunction !== 'function') {
        return
      }
      try {
        await this.getFunction(isMore, error)
      } catch (e) {
        console.log(e)
        this.error = true
      } finally {
        this.refresh = false
        this.load = false
        setTimeout(() => {
          this.isRequest = true
        }, 200)
      }
    },
    onRefresh() {
      this.$pageLoaing(() => {
        this.getList(false, this.error)
      })
    },
    onLoad() {
      this.$pageLoaing(() => {
        this.getList(true, this.error)
      })
    }
  }
}
</script>

<style>
</style>
