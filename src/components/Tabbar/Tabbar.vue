<template>
  <div>
    <van-swipe
      ref="swipeRef"
      :autoplay="0"
      :initial-swipe="initialSwipe"
      :loop="false"
      :show-indicators="false"
      :touchable="false"
    >
      <slot />
    </van-swipe>
    <van-tabbar v-bind="getBindValue" @change="tabbarChange">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.name"
        v-bind="{...getItemBindValue(item)}"
      >
        <template v-if="item.iconSlot" #icon="props">
          <slot :name="item.iconSlot" :active="props.active" />
        </template>
        {{ item.label }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { deepClone, findIndex } from '@/utils'
export default {
  name: 'Tabbar',
  props: {
    // tabbar渲染数据
    tabbarList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      initialSwipe: 0
    }
  },
  computed: {
    getBindValue() {
      const delArr = []
      const oldBindVal = { ...this.$props, ...this.$attrs }
      for (const key in oldBindVal) {
        if (delArr.indexOf(key) !== -1) {
          delete oldBindVal[key]
        }
      }
      return oldBindVal
    }
  },
  activated() {
    const index = findIndex(this.tabbarList, v => {
      return v.name === this.$attrs.value
    })
    if (index !== -1) {
      this.initialSwipe = index
    }
  },
  methods: {
    getItemBindValue(item) {
      const delArr = ['label', 'iconSlot']
      const obj = deepClone(item)
      for (const key in obj) {
        if (delArr.indexOf(key) !== -1) {
          delete obj[key]
        }
      }
      return obj
    },
    tabbarChange(active, immediate) {
      const index = findIndex(this.tabbarList, v => {
        return v.name === active
      })
      if (index !== -1) {
        this.$refs.swipeRef.swipeTo(index, {
          immediate: immediate
        })
        this.$emit('change', active)
        this.$emit('input', active)
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-swipe__track {
  padding-bottom: 50px;
}
</style>
