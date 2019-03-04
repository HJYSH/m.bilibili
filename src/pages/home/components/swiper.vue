<template>
  <div class="body">
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide><img class="swiper-img" src="http://i0.hdslb.com/bfs/archive/475f799e8f72dacf942daf12479bdbea8de51701.jpg@480w_300h.webp" /></swiper-slide>
        <swiper-slide><img class="swiper-img" src="//i0.hdslb.com/bfs/archive/37a91a2860930ace53556d8c74413f269b242615.jpg@480w_300h.webp" /></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .body >>> .swiper-pagination-bullet
    width: .1rem
    height:.1rem
    margin:.05rem
    background:#fff
    opacity :1
  .body >>> .swiper-pagination-bullet-active
    background: #de698c
  .body >>> .swiper-pagination-bullets
    bottom:0
  .body
    padding:0 .24rem
    .swiper
      width:100%
      height:0
      padding-bottom:29.375%
      border-radius :.2rem
      overflow:hidden
      .swiper-img
        width: 100%
</style>
