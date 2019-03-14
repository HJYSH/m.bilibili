<template>
  <div class="header">
    <div class="list" v-if="showList">
      <div class="list-item" v-for="item of list" :key="item.id">
        <div class="item">
          <div class="item-image">
            <img class="image" :src="item.imgUrl" />
            <div class="image-msg">
              <div class="number-tb">
                <span class="iconfont">&#xe636;</span>
                <p class="number">{{item.times}}</p>
              </div>
              <div class="number-right">
                <span class="iconfont">&#xe650;</span>
                <p class="number">{{item.person}}</p>
              </div>
            </div>
          </div>
          <div class="desc">
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
    showList () {
      return this.list.length
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    padding:.24rem .12rem
    .list
      width:100%
      font-size:0
      .list-item
        display:inline-block
        width: 50%
        height:3rem
        overflow: hidden
        margin-bottom:.24rem
        .item
          padding: 0 .12rem
          .item-image
            position: relative
            width: 100%
            height:0
            padding-bottom:62.965%
            overflow:hidden
            .image
              width:100%
              -webkit-border-radius: .2rem
              -moz-border-radius: .2rem
              border-radius: .2rem
            .image-msg
              width: 100%
              height:.32rem
              line-height :.32rem
              position: absolute
              bottom:.05rem
              left:0
              .number-tb
                color: #fff
                width:1.26rem
                margin-left:.2rem
                font-size :.24rem
                span
                  font-size :.2rem
                .number
                  width:.96rem
                  display:inline
              .number-right
                position:absolute
                top: 0
                left:1.46rem
                color: #fff
                width:1.26rem
                margin-left:.2rem
                font-size :.2rem
                span
                  font-size :.2rem
                .number
                  width:.96rem
                  display:inline
          .desc
            font-size :.26rem
            height:.6rem
            overflow: hidden
            line-height:.3rem
            margin-top:.12rem
</style>
