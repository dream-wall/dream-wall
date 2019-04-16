<template>
  <div id="app">
    <div class="dw-app__container">
      <dw-header></dw-header>
      <div class="dw-app__main">
        <router-view></router-view>
      </div>
    </div>
    <div class="dw-app__footer">
      <dw-footer></dw-footer>
    </div>
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

#app {
  height: 100%;
}

.dw-app__container {
  min-height: 100%;
  height: auto !important;
}
.dw-app__main {
  padding-bottom: 170px;
}
.dw-app__footer {
  height: 170px;
  margin-top: -170px;
}
</style>
