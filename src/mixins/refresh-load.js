export default {
  data() {
    return {
      // 默认参数，主要是分页数据
      defalutParams: {
        pageSize: 20,
        pageIndex: 0
      },

      // 数据总条数
      total: 0,

      // 列表数据
      listData: []
    }
  }
}
