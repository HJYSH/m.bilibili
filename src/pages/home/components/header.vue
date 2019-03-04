<template>
  <div>
    <div class="header">
      <p class="logo iconfont">&#xe600;</p>
      <p class="search iconfont">&#xe601;</p>
      <p class="road iconfont">&#xe683;</p>
      <router-link to="/"><p class="load">下载 App</p></router-link>
    </div>
    <div class="nav-show">
      <div class="nav-1">
        <div class="nav-1-1">
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
        </div>
      </div>
      <div class="nav-span iconfont" @click="hidden">&#xe62e;</div>
    </div>
    <transition
      name="fade"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <div class="nav-hidden" v-show="show">
        <div class="hidden">
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
          <p>首页</p>
        </div>
        <div class="hidden-footer" @click="hidden">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      show: false
    }
  },
  methods: {
    hidden () {
      this.show = this.show === true ? undefined : true
      return this.show
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    position:relative
    display: flex
    flex-direction :row
    padding: 0.13rem 0
    height:.62rem
    line-height:.62rem
    z-index :9999
    background:#fff
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
  .nav-show
    position: relative
    background:#fff
    padding:.2rem 0
    .nav-span
      position: absolute
      left:90%
      top:.2rem
      bottom:0
      line-height :.52rem
      text-align :center
      width:7%
      font-size :.24rem
    .nav-1
      width:90%;
      height:.52rem
      margin-right:10%;
      background:#fff
      overflow:hidden
      .nav-1-1
        height:.52rem
        line-height: .52rem
        padding-left:.4rem
        overflow-y: hidden
        overflow-x :scroll
        white-space :nowrap
        padding-bottom: .4rem
        p
          display: inline-block
          text-align: left
          width:20%
          text-indent:.1rem
  .nav-hidden
    position:fixed
    top:.88rem
    width:100%
    height:3.9rem
    background:#fff
    .hidden
      padding-left:.15rem
      padding-right:.15rem
      p
        float:left
        position: relative
        width: 16.66%
        text-align :center
        line-height:.87rem
    .hidden-footer
      width:1.8rem
      height:.42rem
      margin:0 auto
      line-height .42rem
      text-align :center
</style>
