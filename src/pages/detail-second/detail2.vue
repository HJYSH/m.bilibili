<template>
  <div>
    <detail2-header :scroll="scroll"></detail2-header>
    <div class="content">
      <detail2-video></detail2-video>
      <detail2-toapp></detail2-toapp>
      <detail2-message :list="detailMessage"></detail2-message>
      <detail2-list
        :scroll="scroll"
      ></detail2-list>
    </div>
  </div>
</template>

<script>
import Detail2Header from './components/detail2-header'
import Detail2Video from './components/video'
import Detail2Toapp from './components/toApp'
import Detail2Message from './components/message'
import Detail2List from './components/like-list'
import axios from 'axios'
export default {
  name: 'Detail2',
  data () {
    return {
      scroll: null,
      detailMessage: []
    }
  },
  components: {
    Detail2List,
    Detail2Message,
    Detail2Toapp,
    Detail2Video,
    Detail2Header
  },
  methods: {
    handleScroll () {
      this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }}
      )
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.detailMessage = data.detailMessage
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    // this.getDetailInfo()
  },
  destroyed () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position: absolute
    top:.88rem
    left:0
    width:100%
</style>
