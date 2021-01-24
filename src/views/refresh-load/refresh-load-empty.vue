<template>
  <page title="PullRefresh-暂无数据">
    <refresh-load
      :list-data="listData"
      :total="total"
      :get-function="getList"
    >
      <van-cell v-for="item in listData" :key="item.id" :title="item.title" />
    </refresh-load>
  </page>
</template>

<script>
import { getEmptyListApi } from './api'
import refreshLoad from '@/mixins/refresh-load'
import RefreshLoad from '_c/RefreshLoad'
export default {
  name: 'PullRefreshEmpty',
  components: {
    RefreshLoad
  },
  mixins: [refreshLoad],
  methods: {
    // 请求数据
    async getList(isMore, error) {
      if (!error) {
        if (isMore) {
          this.defalutParams.pageIndex += 1
        } else {
          this.defalutParams.pageIndex = 1
        }
      }
      const res = await getEmptyListApi({
        params: Object.assign(this.defalutParams)
      })
      if (res) {
        this.total = res.data.total
        if (isMore) {
          this.listData = this.listData.concat(res.data.list)
        } else {
          this.listData = res.data.list
        }
      }
    }
  }
}
</script>

<style>
</style>
