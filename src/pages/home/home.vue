<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <home-swiper></home-swiper>
      <home-list></home-list>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeList from './components/list'
export default {
  name: 'Home',
  components: {
    HomeList,
    HomeSwiper,
    HomeHeader
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .content
    position:absolute
    top:1.8rem
    left:0
    width:100%
</style>
