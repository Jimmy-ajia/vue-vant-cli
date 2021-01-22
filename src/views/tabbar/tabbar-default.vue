<template>
  <page title="Tabbar-基础示例">
    <tabbar v-model="active" :tabbar-list="tabbarList">
      <tabbar-item>
        <div class="tag-item tag1-item" />
      </tabbar-item>
      <tabbar-item>
        <div class="tag-item tag2-item" />
      </tabbar-item>
      <tabbar-item>
        <div class="tag-item tag3-item" />
      </tabbar-item>
      <tabbar-item>
        <div class="tag-item tag4-item" />
      </tabbar-item>
    </tabbar>
  </page>
</template>

<script>
import { Tabbar, TabbarItem } from '_c/Tabbar'
export default {
  name: 'TabbarDefalut',
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 'tag1',
      tabbarList: [
        {
          label: '标签',
          name: 'tag1',
          icon: 'home-o'
        },
        {
          label: '标签',
          name: 'tag2',
          icon: 'search'
        },
        {
          label: '标签',
          name: 'tag3',
          icon: 'friends-o'
        },
        {
          label: '标签',
          name: 'tag4',
          icon: 'setting-o'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tag-item {
  height: 500px;
}
.tag1-item {
  background: #07c160;
}
.tag2-item {
  background: #1989fa;
}
.tag3-item {
  background: #ee0a24;
}
.tag4-item {
  background: #ff976a;
}
</style>
