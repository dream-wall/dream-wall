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
  @component-namespace dw {

    @b signup {
      width: 820px;
      margin: 40px auto;
      padding: 40px 0;
      background-color: #fff;
      box-shadow: 0 3px 3px rgba(0,0,0,.2);
      @utils-clearfix;

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

      @e safely {
        margin-top: 10px;
        @utils-clearfix;

        @m danger {
          li {
            &.danger {
               background-color: #da4619;
            }
          }
        }

        @m general {
          li {
            &.danger,
            &.general {
               background-color: #ff5c00;
            }
          }
        }

        @m safe {
          li {
            background-color: #35b558;
          }
        }

        li {
          float: left;
          width: 60px;
          height: 14px;
          line-height: 14px;
          margin-right: 4px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          background-color: #ddd;
          cursor: default;
        }
      }
    }

    @b form {

      @e group {
        position: relative;
        margin-bottom: 12px;
      }

      @e control {
        width: 100%;
        height: 40px;
        line-height: 18px;
        padding: 11px;
        background-color: #fff;
        border: 1px solid #e4e4e4;
        box-sizing: border-box;

        @when error {
          border-color: #ff6711;
        }

        &:focus {
          border-color: #35b558;
          box-shadow: 0 0 5px #51cc73;
        }
      }

      @e button {
        display: inline-block;
        width: 100%;
        height: 40px;
        padding: 0;
        font-size: 18px;
        text-align: center;
        background: #35b558;
        border: 1px solid #35b558;
        color: #fff;
        cursor: pointer;

        &:hover {
           background: #51cc73;
           border-color: #51cc73;
        }
      }

      @e tip {
        position: absolute;
        top: 0;
        right: 0;
        height: 40px;
        z-index: 20;

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
