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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
