<template>
  <page title="Page组件-内容不够时页脚自动固定在底部" :show-footer="true">
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="按照正常逻辑来讲，一个项目的页脚基本上是不会变的，所以 Page 组件的页面是直接内置在组件中的，有需要的开发者可以在 src/components/Page/index.vue 中进行修改。"
    />
    <div class="content-wrap">
      <p>一、收起你的懦弱，摆出你的霸气，在你跌倒的时候没人扶你，多得是看你笑话的畜生！</p>
      <p>二、你不努力，永远不会有人对你公平，只有你努力了，有了资源，有了话语权以后，你才可能为自己争取公平的机会。</p>
    </div>
  </page>
</template>

<script>
export default {
  name: 'PageLittleFooter'
}
</script>

<style lang="less" scoped>
.content-wrap {
  padding: 0 20px;
  p {
    line-height: 50px;
  }
}
</style>
