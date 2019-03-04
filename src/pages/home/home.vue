<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-list></home-list>
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

</style>
