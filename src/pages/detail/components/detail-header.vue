<template>
  <div class="body">
    <div class="header">
      <p>排行榜</p>
      <router-link class="iconfont reback" to="/nav">&#xe62f;</router-link>
    </div>
    <div class="nav-show">
      <div class="nav-1" >
        <div class="nav-1-1">
          <router-link
            class="nav-link"
            v-for="item of NavList"
            :key="item.id"
            :to="item.to"
          >
            <p>
              {{item.name}}
            </p>
          </router-link>
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
          <p
            v-for="item of NavList"
            :key="item.id"
          >
            {{item.name}}
          </p>
        </div>
        <div class="hidden-footer" @click="hidden">
          <span class="iconfont">&#xe62d;</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      show: false,
      NavList: [
        {
          name: '首页',
          id: '1',
          to: '/'
        },
        {
          name: '首页',
          id: '12',
          to: '/nav'
        },
        {
          name: '首页',
          id: '14',
          to: '/nav'
        },
        {
          name: '首页',
          id: '13',
          to: '/nav'
        },
        {
          name: '首页',
          id: '137',
          to: '/nav'
        },
        {
          name: '首页',
          id: '144',
          to: '/nav'
        },
        {
          name: '首页',
          id: '176',
          to: '/nav'
        },
        {
          name: '首页',
          id: '1877',
          to: '/nav'
        },
        {
          name: '首页',
          id: '174',
          to: '/nav'
        },
        {
          name: '首页',
          id: '19',
          to: '/nav'
        },
        {
          name: '首页',
          id: '178774',
          to: '/nav'
        }
      ]
    }
  },
  methods: {
    hidden () {
      this.show = this.show === true ? undefined : true
      return this.show
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
      padding: 0.13rem 0
      height:.62rem
      line-height:.62rem
      z-index :9999
      background:#fff
      text-align :center
      font-size :.36rem
      color: #fb7299
      .reback
        position: absolute
        left:.44rem
        top:0
    .nav-show
      position: relative
      background:#fff
      padding-left:.4rem
      .nav-span
        position: absolute
        left:90%
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
    .nav-hidden
      position:absolute
      top:.88rem
      width:100%
      background:#fff
      padding-bottom:.42rem
      z-index :99
      .hidden
        padding-left:.15rem
        padding-right:.15rem
        p
          float:left
          position: relative
          width: 16.66%
          text-align :center
          line-height:.87rem
      .hidden-footer
        width:1.8rem
        height:.42rem
        margin:0 auto
        line-height .42rem
        text-align :center
</style>
