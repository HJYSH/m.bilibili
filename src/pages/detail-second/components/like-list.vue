<template>
  <div>
    <div class="likeList border-bottom">
      <div class="image">
        <img class="item" src="//i1.hdslb.com/bfs/archive/232095a864d35d062ca0c460a6232af25b9f7e8c.jpg@320w_200h.webp" />
        <div class="desc">
          <div class="title">王祖贤仿妆</div>
          <div class="msg">37.51万次观看</div>
          <div class="toApp">App内打开</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail2List'
}
</script>

<style lang="stylus" scoped>
  .likeList
    position: relative
    padding:.24rem 0
    margin: 0 .24rem
    .image
      overflow: hidden
      height: 1.5rem
      width:2.34rem
      border-radius :.1rem
      .item
        height:100%
    .desc
      position: absolute
      top:.24rem
      left:0
      height: 1.5rem
      margin-left:2.54rem
      .title
        height:.64rem
      .msg
        height :.24rem
        margin-top:.12rem
      .toApp
        display: inline-block
        box-sizing :border-box
        border: .02rem solid #fb7299
        margin-top:.1rem
        padding:0 .12rem
        border-radius :.1rem
        color:#fb7299
        height:.4rem
        font-size :.24rem
        line-height:.36rem
</style>
