<template>
  <div>
    <div class="header">
      <p class="logo iconfont">&#xe600;</p>
      <p class="search iconfont">&#xe601;</p>
      <p class="road iconfont">&#xe683;</p>
      <p class="load">下载 App</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    display: flex
    flex-direction :row
    padding: 0.13rem 0
    height:.62rem
    line-height:.62rem
    .logo
      padding-left:.36rem
      font-size :.62rem
      color:rgb(222, 105, 140)
    .search
      font-size :.48rem
      width:.48rem
      height:.48rem
      line-height: .48rem
      overflow: hidden
      margin:auto .44rem auto auto
      color:#777
    .road
      overflow: hidden
      font-size :.48rem
      width:.48rem
      height:.48rem
      line-height: .48rem
      margin:auto .24rem auto 0
      color:#777
    .load
      width:1.6rem
      height:.48rem
      line-height: .48rem
      text-align :center
      font-size :.26rem
      margin:auto .24rem auto 0
      color:#fff
      background:#fb7299
      border:.01rem solid #fb7299
      -webkit-border-radius: .085rem
      -moz-border-radius: .085rem
      border-radius: .085rem
</style>
