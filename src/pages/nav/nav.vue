<template>
  <div>
    <nav-header :list="navList" @change="linkTo"></nav-header>
    <nav-recommend :list="nav"></nav-recommend>
    <nav-list :list="contentList"></nav-list>
  </div>
</template>

<script>
import NavHeader from './components/nav-header'
import NavRecommend from './components/nav-recommend'
import NavList from './components/nav-list'
import axios from 'axios'

export default {
  name: 'Nav',
  components: {
    NavList,
    NavRecommend,
    NavHeader
  },
  data () {
    return {
      contentList: [],
      navList: [],
      nav: []
    }
  },
  methods: {
    getNavInfo () {
      axios.get('/api/nav.json', {
        params: {
          id: this.$route.params.id
        }}
      )
        .then(this.getNavInfoSucc)
    },
    getNavInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.navList = data.navList
        this.nav = data.nav
        this.contentList = data.contentList
      }
    },
    linkTo (id) {
      // 如果接受到的id和之前请求axios获得的路由ID不同，重新发送基于现在ID的axios请求（更新缓存）
      if (id !== this.$route.params.id) {
        this.$route.params.id = id
        this.getNavInfo()
      }
    }
  },
  mounted () {
    this.getNavInfo()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
