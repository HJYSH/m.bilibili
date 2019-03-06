<template>
  <div class="body">
    <div class="recommend">
      <p>推荐</p>
      <p>号楼附近了</p>
      <p>推荐</p>
      <p>号楼附近了</p>
      <p>推荐</p>
      <p>号楼附近了</p>
      <p>推荐</p>
      <p>号楼附近了</p>
      <p>推荐</p>
      <p>号楼附近了</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavRecommend',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .body
    position: fixed
    top:1.8rem
    left:0
    width:100%
    height: .88rem
    line-height: .88rem
    padding-left:.44rem
    background: #f9f9f9
    overflow:hidden
    z-index:999
    .recommend
      white-space nowrap
      overflow-x: scroll
      overflow-y: hidden
      height:.88rem
      padding-bottom:.44rem
      p
        color:#fb7299
        margin-right:.48rem
        display:inline-block
</style>
