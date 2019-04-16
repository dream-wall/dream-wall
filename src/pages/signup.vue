<template>
  <div class="dw-signup">
    <div class="dw-signup__main">
      <h2 class="dw-signup__title">新用户注册</h2>
      <div class="dw-signup__form dw-form">
        <div class="dw-form__group">
          <input type="text" class="dw-signup__username dw-form__control is-error" placeholder="请输入用户名">
          <div class="dw-form__tip">
            <span class="dw-form__tip--error dw-form__tip--empty">请输入用户名</span>
          </div>
        </div>
        <div class="dw-form__group">
          <input type="password" class="dw-signup__password dw-form__control" placeholder="请输入6~32位密码">
          <div class="dw-form__tip">
            <span class="dw-form__tip--error dw-form__tip--empty">请输入密码</span>
          </div>
          <ul class="dw-signup__safely" :class="{' dw-signup__safely--safe': false}">
            <li class="danger">弱</li>
            <li class="general">中</li>
            <li class="safe">强</li>
          </ul>
        </div>
        <div class="dw-form__group">
          <button class="dw-form__button">注册</button>
        </div>
      </div>
    </div>
    <div class="dw-signup__aside">
      <div class="dw-signup__forward">
        已有账号 <a class="dw-signup__login" href="#/signin">立即登录</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="postcss">
  @import "../styles/postcss/signup.css";
</style>
