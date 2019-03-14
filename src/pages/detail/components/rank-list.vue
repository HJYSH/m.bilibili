<template>
  <div class="body">
    <div class="list" v-for="item of list" :key="item.index">
      <div class="rank">
        <img class="rank-nb" v-if="item.rank" :src="item.rank" />
        <p v-if="item.number">
          {{item.number}}
        </p>
      </div>
      <div class="image"><img :src="item.image"/></div>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RanklList',
  props: {
    list: Array
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
    padding-top:1.6rem
    width:100%
    .list
      position:relative
      height:1.5rem
      width:100%
      margin-top:.24rem
      overflow:hidden
      .rank
        float:left
        height:1.5rem
        line-height: 1.5rem
        width:1rem
        text-align: center
        .rank-nb
          width:.38rem
          height:.62rem
      .image
        float:left
        width:2.34rem
        border-radius: .1rem
        overflow: hidden
        img
          width:100%
      .desc
        position:absolute
        height:1.5rem
        top:0
        left:0
        margin:0 .12rem 0 3.46rem
</style>
