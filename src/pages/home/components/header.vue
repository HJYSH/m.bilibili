<template>
  <div class="body">
    <div class="header">
      <p class="logo iconfont">&#xe600;</p>
      <p class="search iconfont">&#xe601;</p>
      <p class="road iconfont">&#xe683;</p>
      <router-link class="load" to="/">
        <p>下载 App</p>
      </router-link>
    </div>
    <div class="nav-show">
      <div class="nav-1" >
        <div class="nav-1-1" id="nav">
          <router-link
            class="nav-link"
            to="/"
            >
            <p class="current">
              首页
            </p>
          </router-link><router-link
            class="nav-link"
            v-for="item of list"
            :key="item.id"
            :to="'/nav/'+ item.id"
          >
            <p :class="{current : item.pink}">
              {{item.name}}
            </p>
          </router-link><!--两个链接标签之间连着写，不留空格，消除两个链接之间的空隙-->
        </div>
      </div>
      <div class="nav-span iconfont" @click="hidden">&#xe62e;</div>
    </div>
    <transition
      name="fade"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <div class="nav-hidden" v-show="show">
        <div class="hidden">
          <router-link
            class="nav-link"
            to="/"
            @click="handleScroll"
          >
            <p class="current"  @click="hidden">
              首页
            </p>
          </router-link><router-link
          class="nav-link"
          v-for="item of list"
          :key="item.id"
          :to="'/nav/'+ item.id"
        >
          <p :class="{current : item.pink}" @click="hidden">
            {{item.name}}
          </p>
        </router-link><!--两个链接标签之间连着写，不留空格，消除两个链接之间的空隙-->
        </div>
        <div class="hidden-footer" @click="hidden">
          <span class="iconfont">&#xe62d;</span>
        </div>
        <div @click="handleScroll">4455</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    list: Array
  },
  data () {
    return {
      show: false,
      scrollX: null
    }
  },
  methods: {
    hidden () {
      this.show = this.show === true ? undefined : true
      document.getElementById('nav').scrollLeft = 200
    },
    handleScroll () {
      this.scrollX = document.getElementById('nav').scrollLeft
      console.log(this.scrollX)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .body
    position: fixed
    width: 100%
    z-index :999
    background:#fff
    .header
      position:relative
      display: flex
      flex-direction :row
      padding: 0.13rem 0
      height:.62rem
      line-height:.62rem
      z-index :9999
      background:#fff
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
    .nav-show
      position: relative
      background:#fff
      padding:.2rem 0 .2rem .4rem
      .nav-span
        position: absolute
        left:90%
        top:.2rem
        bottom:0
        line-height :.52rem
        text-align :center
        width:7%
        font-size :.24rem
      .nav-1
        width:90%;
        height:.52rem
        margin-right:10%;
        background:#fff
        overflow:hidden
        .nav-1-1
          height:.52rem
          line-height: .52rem
          overflow-y: hidden
          overflow-x :scroll
          white-space :nowrap
          padding-bottom: .4rem
          .nav-link
            color:black
            display: inline-block
            text-align: left
            width:20%
            text-indent:.1rem
            p
              display:inline
            .current
              position: relative
              color:pink
              box-sizing border-box
              &:after
                position:absolute
                content:''
                width:120%
                left:-10%
                bottom:-.1rem
                border-bottom :.05rem solid pink
    .nav-hidden
      position:absolute
      top:.88rem
      width:100%
      background:#fff
      padding-bottom:.42rem
      z-index :99
      .hidden
        overflow: hidden
        padding-left:.15rem
        padding-right:.15rem
        .nav-link
          color:black
          display: inline-block
          text-align: center
          width:16.66%
          line-height:.87rem
          p
            display:inline
          .current
            position: relative
            color:pink
            box-sizing border-box
            &:after
              position:absolute
              content:''
              width:120%
              left:-10%
              bottom:-.1rem
              border-bottom :.05rem solid pink
      .hidden-footer
        width:1.8rem
        height:.42rem
        margin:0 auto
        line-height .42rem
        text-align :center
</style>
