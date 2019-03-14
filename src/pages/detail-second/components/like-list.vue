<template>
  <div>
    <div class="cao">
      <div class="left">
        <div class="iconfont show">&#xe606;<p>收藏</p></div>
      </div>
      <div class="left">
        <div class="iconfont  show">&#xe673;<p>缓存</p></div>
      </div>
      <div class="left">
        <div class="iconfont show">&#xe608;<p>分享</p></div>
      </div>
      <div class="right">
        <div class="iconfont show">&#xe602;<p>46464689</p></div>
      </div>
    </div>
    <div class="likeList border-bottom">
      <div class="image">
        <img class="item" src="//i1.hdslb.com/bfs/archive/232095a864d35d062ca0c460a6232af25b9f7e8c.jpg@320w_200h.webp" />
        <div class="desc">
          <div class="title">王祖贤仿妆</div>
          <div class="msg">37.51万次观看</div>
          <div class="toApp">App内打开</div>
        </div>
      </div>
    </div>
    <div class="toTop iconfont" ref="toTop" @click="scrollToTop">&#xe717;</div>
  </div>
</template>

<script>
export default {
  name: 'Detail2List',
  props: {
    scroll: Number
  },
  methods: {
    scrollToTop () {
      window.pageYOffset = 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  },
  watch: {
    scroll () {
      if (this.scroll > 554) {
        this.$refs.toTop.style.display = 'block'
      } else {
        this.$refs.toTop.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cao
    position: relative
    margin:0 .36rem
    height:.38rem
    line-height: .38rem
    font-size: .24rem
    .left
      display:inline-block
      margin-right:.4rem
      .show
        display:inline-block
        font-size :.3rem
        p
          display: inline-block
          transform scale(0.8)
    .right
      position: absolute
      right:.12rem
      top:0
      .show
        display:inline-block
        p
          display: inline-block
          transform scale(0.8)
  .likeList
    position: relative
    padding:.24rem 0
    margin: 0 .24rem
    .image
      overflow: hidden
      height: 1.5rem
      width:2.34rem
      border-radius :.1rem
      .item
        width:100%
        height:100%
    .desc
      position: absolute
      top:.24rem
      left:0
      height: 1.5rem
      margin-left:2.54rem
      .title
        height:.64rem
      .msg
        height :.24rem
        margin-top:.12rem
      .toApp
        display: inline-block
        box-sizing :border-box
        border: .02rem solid #fb7299
        margin-top:.1rem
        padding:0 .12rem
        border-radius :.1rem
        color:#fb7299
        height:.4rem
        font-size :.24rem
        line-height:.36rem
  .toTop
    display:none
    position:fixed
    bottom: 1rem
    right:.5rem
    height:.8rem
    width:.8rem
    line-height :.8rem
    text-align :center
    z-index:9
    border-radius :50%
    background-color: blanchedalmond
</style>
