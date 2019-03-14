<template>
  <div>
    <home-header :list="navList"></home-header>
    <div class="content">
      <home-swiper :list="swiperList"></home-swiper>
      <home-list :list="iconList"></home-list>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeList from './components/list'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeList,
    HomeSwiper,
    HomeHeader
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      navList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.navList = data.navList
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
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
