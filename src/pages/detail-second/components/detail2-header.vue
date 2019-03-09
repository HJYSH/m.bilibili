<template>
  <div class="body">
    <div class="header" ref="body">
      <p class="logo iconfont">&#xe600;</p>
      <p class="search iconfont">&#xe601;</p>
      <p class="road iconfont">&#xe683;</p>
      <router-link class="load" to="/">
        <p>下载 App</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail2Header',
  data () {
    return {
      NavList: [
        {
          name: '首页',
          id: '1',
          to: '/'
        },
        {
          name: '首页',
          id: '12',
          to: '/nav'
        },
        {
          name: '首页',
          id: '14',
          to: '/nav'
        },
        {
          name: '首页',
          id: '13',
          to: '/nav'
        },
        {
          name: '首页',
          id: '137',
          to: '/nav'
        },
        {
          name: '首页',
          id: '144',
          to: '/nav'
        },
        {
          name: '首页',
          id: '176',
          to: '/nav'
        },
        {
          name: '首页',
          id: '1877',
          to: '/nav'
        },
        {
          name: '首页',
          id: '174',
          to: '/nav'
        },
        {
          name: '首页',
          id: '19',
          to: '/nav'
        },
        {
          name: '首页',
          id: '178774',
          to: '/nav'
        }
      ]
    }
  },
  props: {
    scroll: Number
  },
  watch: {
    scroll () {
      if (this.scroll > 208) {
        this.$refs.body.style.position = 'fixed'
      } else {
        this.$refs.body.style.position = 'relative'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .body
    width: 100%
    z-index :9
    background:#fff
    .header
      position:relative
      display: flex
      flex-direction :row
      padding: 0.13rem 0
      height:.62rem
      line-height:.62rem
      z-index :99
      background:#fff
      width:100%
      .logo
        padding-left:.36rem
        font-size :.62rem
        color:rgb(222, 105, 140)
      .search
        font-size :.48rem
        width:.48rem
        height:.48rem
        line-height: .48rem
        overflow: hidden
        margin:auto .44rem auto auto
        color:#777
      .road
        overflow: hidden
        font-size :.48rem
        width:.48rem
        height:.48rem
        line-height: .48rem
        margin:auto .24rem auto 0
        color:#777
      .load
        width:1.6rem
        height:.48rem
        line-height: .48rem
        text-align :center
        font-size :.26rem
        margin:auto .24rem auto 0
        color:#fff
        background:#fb7299
        border:.01rem solid #fb7299
        -webkit-border-radius: .085rem
        -moz-border-radius: .085rem
        border-radius: .085rem
</style>
