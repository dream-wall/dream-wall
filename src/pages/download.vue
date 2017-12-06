<template>
  <div class="dw-download">
    <div class="dw-download__info">
      <a class="dw-download__logo" href="javascript:;"></a>
      <div class="dw-download__description">
        <h3 class="dw-download__website">梦想墙</h3>
        <span class="dw-download__version">V 0.0.0</span>
      </div>
    </div>
    <div class="dw-download__links">
      <a class="dw-download__link" href="javascript:;"><i class="dw-download__iphone"></i> iPhone版</a>
      <a class="dw-download__link" href="javascript:;"><i class="dw-download__android"></i> 安卓版</a>
    </div>
    <div class="dw-download__start">
      <div class="dw-download__tip">手机扫描二维码直接下载</div>
      <a class="dw-download__qrcode" href="javascript:;"></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
@component-namespace dw {

  @b download {
    width: 496px;
    margin: 100px auto;

    @e info {
      display: flex;
    }

    @e logo {
      width: 104px;
      height: 104px;
      background: url("../assets/images/logos/logo3.png") no-repeat center;
      background-size: 100%;
    }

    @e description {
      margin-left: 15px;
    }

    @e website {
      padding: 15px 0 7px 0;
      font-size: 42px;
      line-height: 54px;
    }

    @e version {
      font-size: 18px;
    }

    @e links {
      padding-top: 40px;
    }

    @e link {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 172px;
      height: 48px;
      margin-right: 16px;
      line-height: 48px;
      font-size: 16px;
      text-align: center;
      color: white;
      border: 1px solid white;
      background-color: #7D7C7A;
      box-sizing: border-box;
      border-radius: 24px;
      transition: all .3s;

      i {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        background-size: 100%;
      }

      &:hover {
        background-color: black;
      }
    }

    @e iphone {
      background: url("../assets/images/icon_ios.png") no-repeat;
    }

    @e android {
      background: url("../assets/images/icon_android.png") no-repeat;
    }

    @e start {
      padding-top: 36px;
    }

    @e tip {
      font-size: 16px;
    }

    @e qrcode {
      display: block;
      margin: 16px 0 0 20px;
      width: 200px;
      height: 200px;
      background: url("../assets/images/qrcode.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
