<template>
  <div>
    <detail2-header :scroll="scroll"></detail2-header>
    <div class="content">
      <detail2-video></detail2-video>
      <detail2-toapp></detail2-toapp>
      <detail2-message></detail2-message>
      <detail2-list
        :scroll="scroll"
      ></detail2-list>
      <detail2-list></detail2-list>
      <detail2-list></detail2-list>
      <detail2-list></detail2-list>
      <detail2-list></detail2-list>
      <detail2-list></detail2-list><detail2-list></detail2-list><detail2-list></detail2-list>
      <detail2-list></detail2-list>
    </div>
  </div>
</template>

<script>
import Detail2Header from './components/detail2-header'
import Detail2Video from './components/video'
import Detail2Toapp from './components/toApp'
import Detail2Message from './components/message'
import Detail2List from './components/like-list'
export default {
  name: 'Detail2',
  data () {
    return {
      scroll: null
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
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
