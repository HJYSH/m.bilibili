<template>
  <div class="nav-list">
    <div class="body" v-for="items of list" :key="items.index">
      <div class="list border-top">
        <div class="title">
            {{items.title}}
        </div>
        <router-link class="more" :class="{pink:items.rank}" :to="items.to">
          <div>
            <span class="iconfont rank" v-if="items.rank">&#xe6d8;</span>
            {{items.more}}
            <span class="iconfont">&#xe62f;</span>
          </div>
        </router-link>
      </div>
      <div class="header">
        <div class="header-item">
          <router-link class="list-item"  v-for="inner of items.content" :key="inner.id" :to="'/detail2/'+inner.id">
            <div class="item">
                <div class="item-image">
                  <img class="image" :src="inner.imgUrl" />
                  <div class="image-msg">
                    <div class="number-tb">
                      <span class="iconfont">&#xe636;</span>
                      <p class="number">{{inner.times}}</p>
                    </div>
                    <div class="number-right">
                      <span class="iconfont">&#xe650;</span>
                      <p class="number">{{inner.person}}</p>
                    </div>
                  </div>
                </div>
                <div class="desc">
                  <p>{{inner.desc}}</p>
                </div>
              </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
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
  .nav-list
    position: absolute
    top:2.68rem
    width:100%
    background: #f9f9f9
    .body
      .list
        position: relative
        overflow: hidden
        height:1.04rem
        line-height:1.04rem
      .border-top
        &:before
          border-bottom-color:#999
        .title
          margin-left:.24rem
          width:100%
        .more
          position: absolute
          top:0
          right:0
          margin-right:.24rem
          color:#999
          font-size :.28rem
        .pink
          color:#ffa726
          .rank
            color:#ffa726
          span
            color:#aaa
      .header
        padding:.0 .12rem
        .header-item
          width:100%
          font-size:0
          .list-item
            display:inline-block
            width: 50%
            height:2.8rem
            overflow: hidden
            color:#000
            margin-bottom:.24rem
            .item
              padding: 0 .12rem
              .item-image
                position: relative
                width: 100%
                height:0
                padding-bottom:62.965%
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
