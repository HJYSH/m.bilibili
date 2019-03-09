<template>
  <div class="body">
    <img class="image" src="//i2.hdslb.com/bfs/archive/61a2b41dae45f235abfde40206b8370431e398b5.jpg_400x300.jpg" />
    <p class="name">av45037790</p>
    <div class="videoTime">00:10:59</div>
    <div class="display"></div>
  </div>
</template>

<script>
export default {
  name: 'Detail2Video'
}
</script>

<style lang="stylus" scoped>
  .body
    position: relative
    width:100%
    height:4.22rem
    background-color: rgba(60,60,60,.5)
    z-index:9999
    .image
      width:100%
      height:100%
      opacity :.85
      filter :blur(.1725rem)
    .name
      position:absolute
      top:0
      left:0
      width:100%
      height:.64rem
      line-height: .64rem
      color:#fff
      text-align: center
    .videoTime
      position:absolute
      border: .02rem solid #fff
      -webkit-border-radius: .07rem
      -moz-border-radius: .07rem
      border-radius: .07rem
      color:#fff
      padding: .06rem
      left:.12rem
      bottom:.24rem
    .display
      position: absolute
      right:.12rem
      bottom:.24rem
      width:.92rem
      height:.92rem
      background-image: url(//s1.hdslb.com/bfs/static/mult/images/TV-Play.png)
      -webkit-background-size: 100% auto
      background-size: 100% auto
</style>
