<template>
    <div class="dw-dream">
      <div class="dw-dream__hero">
        <h1 class="dw-dream__logo">梦想墙</h1>
        <div class="dw-dream__wtf">
          <p class="dw-dream__wisdom">来到这里，每天早晨叫醒我们的将不是闹铃，而是梦想！</p>
          <p class="dw-dream__slogan">这面墙，是一个梦想开始的地方。在这里，你将邂逅到所有美丽的梦想...</p>
        </div>
        <div class="dw-dream__tags">
          <span class="dw-dream__lastest dw-dream__tags--active">最新</span>
          <span class="dw-dream__hot">热门</span>
        </div>
      </div>
      <ul class="dw-dream__list">
        <li class="dw-dream__item" v-for="dream in dreams" :key="dream.id">
          <div class="dw-dream__wrap">
            <img class="dw-dream__image" :src="require(`../assets/images/dream-list/${dream.img_url}`)" :alt="dream.dream_name">
            <h3 class="dw-dream__title">{{dream.dream_name}}</h3>
            <h4 class="dw-dream__user">{{dream.dream_person}}</h4>
            <p class="dw-dream__time">达成时间：{{dream.plan_time}}</p>
            <p class="dw-dream__task"><span>子任</span>务：{{dream.task_nums}}个</p>
            <p class="dw-dream__percent"><span>完成</span>度：{{dream.complete_percentage}}%</p>
            <p class="dw-dream__count">
              <span class="dw-dream__picture iconfont icon-eye"> {{dream.pic_nums}}</span>
              <span class="dw-dream__view iconfont icon-picture"> {{dream.watcher_nums}}</span>
            </p>
          </div>
        </li>
      </ul>
      <div class="dw-dream__more">
        体验更多梦想
      </div>
    </div>
</template>

<script>
import {post} from '@/http'
export default {
  data () {
    return {
      dreams: []
    }
  },
  methods: {
    getDreams () {
      post('dreams', {
        current_page: 1,
        page_size: 12
      }).then(res => {
        this.dreams = res.result.rows
      })
    }
  },
  mounted () {
    this.getDreams()
  }
}
</script>

<style lang="postcss">
.dw-dream {
  width: 1096px;
  margin: 0 auto;
  .dw-dream__hero {
    position: relative;
    height: 104px;
    padding: 30px 0;
  }
  .dw-dream__logo {
    float: left;
    width: 104px;
    height: 104px;
    margin: 0 16px 0 35px;
    text-indent: -9999px;
    background: url(../assets/images/logos/logo3.png) no-repeat center;
    background-size: 100%;
  }
  .dw-dream__wtf {
    float: left;
  }
  .dw-dream__wisdom {
    padding-top: 20px;
    font-size: 28px;
    line-height: 36px;
  }
  .dw-dream__slogan {
    font-size: 20px;
    line-height: 32px;
  }
  .dw-dream__tags {
    position: absolute;
    bottom: 24px;
    right: 0;
  }
  .dw-dream__lastest,
  .dw-dream__hot {
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin-right: 20px;
    font-size: 14px;
    text-align: center;
    color: white;
    background-color: #79716E;
    border-radius: 50%;
    cursor: pointer;
  }
  .dw-dream__tags--active {
    background-color: #C00C0B;
  }
  .dw-dream__list {
    margin: 0 -8px;
    @utils-clearfix;
  }
  .dw-dream__item {
    float: left;
    width: 262px;
    margin: 0 8px 20px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
      transform: scale(1.04);
      box-shadow: 1px 1px 10px 2px #EBEAE8;
    }
  }
  .dw-dream__wrap {
    width: 242px;
    padding: 10px 10px 6px 10px;
    background-color: white;
  }
  .dw-dream__image {
    display: block;
    width: 100%;
    height: 160px;
  }
  .dw-dream__title {
    padding: 14px 0 8px 3px;
    font-size: 12px;
    font-weight: bold;
  }
  .dw-dream__user,
  .dw-dream__time,
  .dw-dream__task,
  .dw-dream__percent {
    padding: 0 0 8px 3px;
    color: #444444;
  }
  .dw-dream__user {
    font-size: 12px;
    color: #691417;
  }
  .dw-dream__task,
  .dw-dream__percent {
    span {
      letter-spacing: 6px;
    }
  }
  .dw-dream__count {
    padding: 8px 0;
    overflow: hidden;
  }
  .dw-dream__picture,
  .dw-dream__view {
    float: right;
    font-size: 8px;
    color: #757374;
  }
  .dw-dream__picture {
    margin: 0 3px 0 6px;
  }
  .dw-dream__more {
    font-size: 16px;
    text-align: center;
    padding: 10px 0 30px 0;
    cursor: pointer;
  }
}
</style>
