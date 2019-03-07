<template>
  <div class="body">
    <div class="list" v-for="item of list" :key="item.index">
      <div class="rank"><img class="rank-nb" v-if="item.rank" :src="item.rank" /><p>{{item.number}}</p></div>
      <div class="image"><img :src="item.image"/></div>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      list: [
        {
          rank: '//s1.hdslb.com/bfs/static/mult/images/rank1.png',
          image: '//i1.hdslb.com/bfs/archive/289c7e3ee52522b5b305560be0194b7259872c50.jpg@200w_125h.webp',
          desc: '超唯美的动画《白蛇：缘起》同人MV——下一世再与你'
        },
        {
          number: '4',
          image: '//i1.hdslb.com/bfs/archive/289c7e3ee52522b5b305560be0194b7259872c50.jpg@200w_125h.webp',
          desc: '超唯美的动画《白蛇：缘起》同人MV——下一世再与你'
        }
      ]
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
      margin-top:.24rem
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
