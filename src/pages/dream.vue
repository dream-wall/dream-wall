<template>
    <div class="dw-dream">
      <div class="dw-dream__hero">
        <h1 class="dw-dream__logo">梦想墙</h1>
        <div class="dw-dream__wtf">
          <p class="dw-dream__wisdom">来到这里，每天早晨叫醒我们的将不是闹铃，而是梦想！</p>
          <p class="dw-dream__slogan">这面墙，是一个梦想开始的地方。在这里，你将邂逅到所有美丽的梦想...</p>
        </div>
        <div class="dw-dream__tags">
          <span class="dw-dream__lastest"
            :class="{ ' dw-dream__tags--active': sort === 'last' }"
            @click="getDreams({page: 1, row, sort: 'last'})">最新</span>
          <span class="dw-dream__hot"
            :class="{ ' dw-dream__tags--active': sort === 'pop' }"
            @click="getDreams({page: 1, row, sort: 'pop'})">热门</span>
        </div>
      </div>
      <template v-if="dreams.length>0 && !loading">
        <ul class="dw-dream__list">
          <li class="dw-dream__item" v-for="(dream, index) in dreams" :key="dream.id">
            <div class="dw-dream__wrap">
              <img class="dw-dream__image" :src="require(`../assets/images/dream-list/${dream.img_url}`)" :alt="dream.dream_name">
              <h3 class="dw-dream__title">{{dream.dream_name}}</h3>
              <h4 class="dw-dream__user">{{dream.dream_person}}</h4>
              <p class="dw-dream__time">达成时间：{{dream.plan_time}}</p>
              <p class="dw-dream__task"><span>子任</span>务：{{dream.task_nums}}个</p>
              <p class="dw-dream__percent"><span>完成</span>度：{{dream.complete_percentage}}%</p>
              <p class="dw-dream__count">
                <span class="dw-dream__picture iconfont icon-eye"> {{dream.watcher_nums}}</span>
                <span class="dw-dream__view iconfont icon-picture"> {{dream.pic_nums}}</span>
              </p>
              <div class="dw-dream__hoting2" v-if="dream.watcher_nums > 10000">
                <span class="dw-dream__hoting2--text">HOT</span>
                <span class="dw-dream__hoting2--white"></span>
              </div>
            </div>
          </li>
        </ul>
        <div v-if="!end || more" class="dw-dream__more" @click="getDreams({page: ++page, row, sort: sort})">
            <template v-if="!more">
              体验更多梦想
            </template>
            <dw-loading v-else :loading="effect"></dw-loading>
        </div>
        <div v-else class="dw-dream__endline">
          ------ 我也是有底线的 ------
        </div>
      </template>
      <dw-loading v-else :loading="effect"></dw-loading>
    </div>
</template>

<script>
import DwLoading from '@/components/loading'
import {post} from '@/http'

export default {
  components: {
    DwLoading
  },
  data () {
    return {
      dreams: [],
      page: 1,
      row: 12,
      sort: '',
      count: 1,
      end: false,
      loading: false,
      more: false,
      effect: Math.ceil(Math.random() * 10)
    }
  },
  methods: {
    getDreams ({page = 1, row = 12, sort = 'last'} = {}) {
      if (page === 1 && sort === this.sort) return // 如果请求的是第一页 && 请求的是同一类别
      if (this.end && sort === this.sort) return // 如果请求到最后一页 && 请求的是同一类别（最新或最热）
      if (sort !== this.sort) { // 请求的是不同类别（说明做了切换最新和最热）
        this.sort = sort
        this.end = false
        this.page = 1
      }
      if (page === 1) { // 首次加载动画
        this.loading = true
      } else { // 体验更多梦想加载动画
        this.more = true
      }
      post('dreams', {
        current_page: page,
        page_size: row,
        sort: sort
      }).then(res => {
        if (Math.ceil(res.result.count / this.row) === page) {
          this.end = true
        }
        if (page === 1) {
          setTimeout(_ => {
            this.dreams = res.result.rows
            this.loading = false
          }, 1000)
        } else {
          setTimeout(_ => {
            this.dreams.push.apply(this.dreams, res.result.rows)
            this.more = false
          }, 1000)
        }
      })
    }
  },
  mounted () {
    this.getDreams()
  }
}
</script>

<style lang="postcss">
  @import "../styles/postcss/dream.css";
</style>
