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
  @component-namespace dw {

    @b signin {
      width:

    820px

    ;
      margin:

    40px auto

    ;
      padding:

    40px

    0;
      background-color: #fff

    ;
      box-shadow:

    0 3px

    3px

    rgba(0,0,0,.2);
      @utils-clearfix ;

      @e main {
        float: left;
        width: 452px;
        padding: 0 40px;
        border-right: 2px solid #fafafa;
        box-sizing: border-box;
      }

      @e aside {
        float: left;
        padding: 0 40px;
      }

      @e forward {
        padding-top: 50px;
        font-size: 16px;
      }

      @e login {
        color: #35b558;
      }

      @e title {
        margin-bottom: 20px;
        line-height: 20px;
        font-weight: normal;
        font-size: 20px;
        color: #333;
      }
    }

    @b form {

      @e group {
        position: relative;
        margin-bottom: 12px;
      }

      @e control {
        width:

      100%;
        height:

      40px

      ;
        line-height:

      18px

      ;
        padding:

      11px

      ;
        background-color: #fff

      ;
        border:

      1px solid #e4e4e4

      ;
        box-sizing: border-box

      ;

        @when error {
          border-color: #ff6711;
        }

      &:focus {
         border-color: #35b558;
         box-shadow: 0 0 5px #51cc73;

        @when error {
          border-color: #35b558;
        }
      }
    }

    @e button {
      display: inline-block

    ;
      width:

    100%;
      height:

    40px

    ;
      padding:

    0;
      font-size:

    18px

    ;
      text-align: center

    ;
      background: #35b558

    ;
      border:

    1px solid #35b558

    ;
      color: #fff

    ;
      cursor: pointer

    ;

    &:hover {
       background: #51cc73;
       border-color: #51cc73;
     }
    }

    @e tip {
      position: absolute

    ;
      top:

    0;
      right:

    0;
      height:

    40px

    ;
      z-index:

    20;

      @m error {
        display: block;
        height: 26px;
        line-height: 26px;
        margin: 7px 7px 0 0;
        padding: 0 5px;
        color: #fff;
        background-color: #ff5c00;
        border-radius: 2px;
      }
    }
  }
  }
</style>
