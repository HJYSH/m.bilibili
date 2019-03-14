<template>
  <div class="body" ref="body">
    <div class="content">
      <div class="title" ref="title"><p :class="{omit:show}"  v-for="item of list" :key="item.index">{{item.title}}</p></div>
      <div class="toggle iconfont" v-if="show" @click="toggle">&#xe62e;</div>
      <div class="toggle iconfont" v-if="!show" @click="toggle">&#xe62d;</div>
      <div v-for="item of list" :key="item.index">
        <div class="msg">
          <span class="author">{{item.autor}}</span>
          <span class="times">{{item.times}}</span>
          <span class="barrage">{{item.barrage}}</span>
          <span class="time">{{item.time}}</span>
        </div>
        <div class="desc">
          <div class="not"><span class="iconfont forbid">&#xe6f9;</span>{{item.forbid}}</div>
          <div>
            <p>{{item.content}}</p>
          </div>
          <div>
            <span v-for="inner of item.classify" :key="inner.index">{{inner.name}}</span>
          </div>
        </div>
        <div class="keyword">
          <div class="key" v-for="int of item.keyword" :key="int.index">{{int.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail2Message',
  props: {
    list: Array
  },
  data () {
    return {
      show: 'true'
    }
  },
  methods: {
    toggle () {
      this.show = this.show === undefined ? true : undefined
      if (this.show === undefined) {
        this.$refs.title.style.height = 'auto'
        this.$refs.body.style.height = 'auto'
      } else {
        this.$refs.title.style.height = '.48rem'
        this.$refs.body.style.height = '1.1rem'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .body
    overflow: hidden
    width:100%
    height:1.1rem
    .content
      position: relative
      padding:.24rem
      .title
        margin-right:.36rem
        font-size :.32rem
        height:.48rem
        line-height:.48rem
        overflow: hidden
        .omit
          ellipsis()
      .toggle
        position: absolute
        top:.24rem
        right:.24rem
        font-size :.32rem
        height:.48rem
        line-height :.48rem
    .msg
      margin-top:.12rem
      font-size :.26rem
      .author
        margin-right:.36rem
      .times
        margin-right:.16rem
      .barrage
        margin-right:.16rem
      .time
        margin-right:.16rem
    .desc
      line-height :.61rem
      font-size :.26rem
    .keyword
      margin-top:.12rem
      .key
        display: inline-block
        background-color: #f4f4f4
        border-radius :.44rem
        margin: 0 .24rem .24rem 0
        padding: .16rem .36rem
    .not
      font-size :.24rem
      .forbid
        font-size :.26rem
        color:red
</style>
