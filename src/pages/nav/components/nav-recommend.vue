<template>
  <div class="body">
    <div class="recommend">
      <router-link :to="'/nav/'+item.id"  v-for="item of list" :key="item.id">
        <p>
          {{item.name}}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavRecommend',
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
    position: fixed
    top:1.8rem
    left:0
    width:100%
    height: .88rem
    line-height: .88rem
    padding-left:.44rem
    background: #f9f9f9
    overflow:hidden
    z-index:9
    .recommend
      white-space nowrap
      overflow-x: scroll
      overflow-y: hidden
      height:.88rem
      padding-bottom:.44rem
      p
        color:black
        margin-right:.48rem
        display:inline-block
</style>
