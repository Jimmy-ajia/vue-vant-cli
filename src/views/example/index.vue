<template>
  <page title="综合示例-列表增删改">
    <template #right>
      <span @click="$router.push('/example-add')">新增</span>
    </template>
    <refresh-load
      :list-data="listData"
      :total="total"
      :get-function="getList"
    >
      <van-swipe-cell
        v-for="(item, $index) in listData"
        :key="item.id"
      >
        <van-cell
          :title="`${item.author} (${$index + 1})`"
          @click="toEdit(item, $index)"
        />
        <template #right>
          <van-button
            square
            type="danger"
            text="删除"
            @click="del(item, $index)"
          />
        </template>
      </van-swipe-cell>
    </refresh-load>
  </page>
</template>

<script>
import { getListApi, delsApi } from './api'
import refreshLoad from '@/mixins/refresh-load'
import RefreshLoad from '_c/RefreshLoad'
export default {
  name: 'Example',
  components: {
    RefreshLoad
  },
  mixins: [refreshLoad],
  created() {
    this.$bus.$on('update', (row, index) => {
      this.$nextTick(() => {
        this.listData[index].author = row.author
      })
    })
    this.$bus.$on('add', (row, index) => {
      this.$nextTick(() => {
        this.listData = []
        this.getList(false, false)
      })
    })
  },
  destroyed() {
    this.$bus.$off('update')
    this.$bus.$off('add')
  },
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
      const res = await getListApi({
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
    },
    // 删除
    del(item, index) {
      this.$dialog.confirm({
        title: '提示',
        message: `确定删除 ${item.author} 数据吗？`
      }).then(() => {
        this.$pageLoaing(async() => {
          const res = await delsApi({
            data: { ids: item.id }
          })
          if (res) {
            this.listData.splice(index, 1)
            this.total = this.listData.length
            this.$toast.success('删除成功！')
          }
        }, { message: '删除中...' })
      })
    },
    // 详情页面
    toDetail(item) {
      // this.$router.push(`/example-detail?id=${item.id}`)
    },
    // 编辑页面
    toEdit(item, index) {
      this.$router.push(`/example-edit?id=${item.id}&index=${index}`)
    }
  }
}
</script>

<style>
</style>
