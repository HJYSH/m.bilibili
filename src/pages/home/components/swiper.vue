<template>
  <div class="body">
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide
          class="swiper-slide"
          v-for="item of list"
          :key="item.index"
        >
          <img class="swiper-img" :src="item.imgUrl" :key="item.index"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
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
    margin:0 .24rem
    border-radius :.2rem
    overflow:hidden
    .swiper
      width:100% !important
      height:0
      padding-bottom:29.6%
      .swiper-slide
        width:100% !important
        .swiper-img
          width: 100%
</style>
