<template>
  <div>
    <rank-header :list="rankList" @change="getNewInfo"></rank-header>
    <rank-list :list="list"></rank-list>
  </div>
</template>

<script>
import RankHeader from './components/rank-header'
import RankList from './components/rank-list'
import axios from 'axios'
export default {
  name: 'Rank',
  components: {
    RankList,
    RankHeader
  },
  data () {
    return {
      rankList: [],
      list: []
    }
  },
  methods: {
    getRankInfo () {
      axios.get('/api/rank.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getRankInfoSucc)
    },
    getRankInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.rankList = data.rankList
        this.list = data.list
      }
    },
    getNewInfo (id) {
      if (id !== this.$route.params.id) {
        this.$route.params.id = id
        this.getRankInfo()
      }
    }
  },
  mounted () {
    this.getRankInfo()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
