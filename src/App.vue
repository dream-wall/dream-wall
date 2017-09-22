<template>
  <div id="app">
    <dw-header></dw-header>
    <router-view></router-view>
    <dw-footer></dw-footer>
  </div>
</template>

<script>
import DwHeader from '@/components/header'
import DwFooter from '@/components/footer'

export default {
  name: 'app',

  components: {
    'dw-header': DwHeader,
    'dw-footer': DwFooter
  }
}
</script>

<style lang="postcss">
@import './styles/postcss/index.css';
@reset-global pc;

html,
body {
  height: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #201F1D;
  font-size: 12px;
  background: url(./assets/images/dw_dream_bg.jpg) repeat-y;
  background-size: 100%;
}

a {
  text-decoration: none;
  color: #201F1D;
}

</style>
