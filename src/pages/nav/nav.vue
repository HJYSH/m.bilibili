<template>
  <div>
    <nav-header></nav-header>
    <nav-recommend></nav-recommend>
    <nav-list></nav-list>
  </div>
</template>

<script>
import NavHeader from './components/nav-header'
import NavRecommend from './components/nav-recommend'
import NavList from './components/nav-list'
export default {
  name: 'Nav',
  components: {
    NavList,
    NavRecommend,
    NavHeader
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
