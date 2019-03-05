<template>
  <div>
    <nav-header></nav-header>
    <nav-recommend></nav-recommend>
  </div>
</template>

<script>
import NavHeader from './components/nav-header'
import NavRecommend from './components/nav-recommend'
export default {
  name: 'Nav',
  components: {
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
