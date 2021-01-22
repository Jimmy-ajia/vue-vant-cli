<template>
  <div class="page-wrap">
    <van-nav-bar
      v-if="showNav"
      left-arrow
      fixed
      placeholder
      safe-area-inset-top
      v-bind="getBindValue"
      @click-left="clickLeft"
      @click-right="clickRight"
    >
      <!-- 标题插槽 -->
      <template v-if="$slots.title" #title>
        <slot name="title" />
      </template>

      <!-- 左侧文案插槽 -->
      <template v-if="$slots.left" #left>
        <slot name="left" />
      </template>

      <!-- 右侧文案插槽 -->
      <template v-if="$slots.right" #right>
        <slot name="right" />
      </template>
    </van-nav-bar>

    <!-- 主体内容 -->
    <div class="van-page-content-wrap" :style="{minHeight:minHeight + 'px', paddingTop:paddingTop+'px'}">
      <slot />
    </div>
    <div v-if="showFooter" class="footer-wrap">
      <div>指导单位：xxxxxxxxxxxxxxxxxxxx</div>
      <div>承办单位：xxxxxxxxxxxxxxxxxxxx</div>
      <div>技术支持：xxxxxxxxxxxxxxxxxxxx</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    // 是否显示页脚
    showFooter: {
      type: Boolean,
      default: false
    },
    // 是否显示导航栏
    showNav: {
      type: Boolean,
      default: true
    },
    paddingTop: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      minHeight: 0
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
  mounted() {
    this.initHeight()
    window.onresize = () => this.initHeight()
  },
  methods: {
    initHeight() {
      let footerHight = 0
      if (this.showFooter) {
        footerHight = document.querySelector('.footer-wrap').clientHeight
      }
      if (this.showNav) {
        this.minHeight = document.documentElement.clientHeight - 46 - this.paddingTop - footerHight
      } else {
        this.minHeight = document.documentElement.clientHeight - this.paddingTop - footerHight
      }
    },
    // 如果有需要自定义事件的，统一在发射出去
    clickLeft() {
      if (this.$listeners['click-left']) {
        this.$emit('click-left')
        return
      }
      // 内部执行后退事件
      this.$router.go(-1)
    },
    clickRight() {
      // 右侧事件一般让外面自定义
      this.$emit('click-right')
    }
  }
}
</script>

<style lang="less" scoped>
.footer-wrap {
  text-align: center;
  background: #f0f2f5;
  color: rgba(0,0,0,.45);
  font-size: 25px;
  line-height: 50px;
  padding: 20px 0;
}
</style>
