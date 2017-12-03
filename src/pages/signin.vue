<template>
  <div class="dw-signin">
    <div class="dw-signin__main">
      <h2 class="dw-signin__title">登录</h2>
      <div class="dw-signin__form dw-form">
        <div class="dw-form__group">
          <input type="text" class="dw-signin__username dw-form__control is-error" placeholder="请输入用户名">
          <div class="dw-form__tip">
            <span class="dw-form__tip--error dw-form__tip--empty">请输入用户名</span>
          </div>
        </div>
        <div class="dw-form__group">
          <input type="password" class="dw-signin__password dw-form__control" placeholder="请输入6~32位密码">
          <div class="dw-form__tip">
            <span class="dw-form__tip--error dw-form__tip--empty">请输入密码</span>
          </div>
        </div>
        <div class="dw-form__group">
          <button class="dw-form__button">登录</button>
        </div>
      </div>
    </div>
    <div class="dw-signin__aside">
      <div class="dw-signin__forward">
        没有账号？ <a class="dw-signin__login" href="#/signup">免费注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="postcss">
  @import "../styles/postcss/signin.css";
</style>
