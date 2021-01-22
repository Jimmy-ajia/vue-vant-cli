<template>
  <div id="app">
    <vue-page-stack>
      <router-view />
    </vue-page-stack>
  </div>
</template>

<style lang="less">
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: @appBg;
}
</style>
