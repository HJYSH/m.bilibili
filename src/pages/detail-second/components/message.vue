<template>
  <div class="body" ref="body">
    <div class="content">
      <div class="title" ref="title">地笼在深潭神秘地洞里几天 , 小莫潜入洞穴...</div>
      <div class="toggle iconfont" v-if="show" @click="toggle">&#xe62e;</div>
      <div class="toggle iconfont" v-if="!show" @click="toggle">&#xe62d;</div>
      <div class="msg">
        <span class="author">RefreshSe</span>
        <span class="times">22.5万次观看</span>
        <span class="barrage">1825弹幕</span>
        <span class="time"></span>
      </div>
      <div class="desc">
        <div class="not">未经作者授权禁止转载</div>
        <div>
          <p>地笼卡在深潭神秘洞穴里几天，小莫潜入洞穴捞地笼，看看收获如何</p>
        </div>
        <div>
          <span>主页&lt;</span>
          <span>生活页&lt;</span>
          <span>日常&lt;</span>
          <span>av45364977</span>
        </div>
      </div>
      <div class="keyword">
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
        <div class="key">河鱼</div>
      </div>
      <div class="caozuo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail2Message',
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
        this.$refs.title.innerHTML = '<p>地笼在深潭神秘地洞里几天，小莫潜入洞穴<br />捞地笼，看看收获如何</p>'
      } else {
        this.$refs.title.style.height = '.48rem'
        this.$refs.body.style.height = '1.1rem'
        this.$refs.title.innerText = '地笼在深潭神秘地洞里几天，小莫潜入洞穴...'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
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
        float: left
        background-color: #f4f4f4
        border-radius :.44rem
        margin: 0 .24rem .24rem 0
        padding: .16rem .36rem
</style>
