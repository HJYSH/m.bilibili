<template>
  <div class="body">
    <div class="header">
      <p>排行榜</p>
      <router-link class="iconfont reback" to="/nav">&#xe62f;</router-link>
    </div>
    <div class="rank-item">
      <div class="nav-1-1">
        <router-link
          class="nav-link"
          v-for="item of list"
          :key="item.id"
          :to="'/rank/' + item.id"
        >
          <p @click="getNewInfo(item.id)">
            {{item.name}}
          </p>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'RankHeader',
  props: {
    list: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    hidden () {
      this.show = this.show === true ? undefined : true
      return this.show
    },
    getNewInfo (id) {
      this.$emit('change', id)
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
    .rank-item
      padding-left:.24rem
      height:.52rem
      overflow: hidden
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
          width:17.6%
          text-indent:.1rem
</style>
