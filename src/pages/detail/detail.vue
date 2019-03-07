<template>
  <div>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailHeader from './components/detail-header'
import DetailList from './components/detali-list'
export default {
  name: 'Detail',
  components: {
    DetailList,
    DetailHeader
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
