<template>
  <div class="nav-list">
    <div class="body" v-for="items of list" :key="items.index">
      <div class="list border-top">
        <div class="title">
            {{items.title}}
        </div>
        <router-link class="more" :to="items.to">
          <div class="iconfont">{{items.more}}<span class="iconfont">&#xe62f;</span></div>
        </router-link>
      </div>
      <div class="header">
        <div class="header-item">
          <div class="list-item"  v-for="inner of items.item" :key="inner.id">
            <div class="item">
              <div class="item-image">
                <img class="image" :src=inner.imgsrc />
                <div class="image-msg">
                  <div class="number-tb">
                    <span class="iconfont">&#xe636;</span>
                    <p class="number">{{inner.view}}</p>
                  </div>
                  <div class="number-right">
                    <span class="iconfont">&#xe650;</span>
                    <p class="number">{{inner.number}}</p>
                  </div>
                </div>
              </div>
              <div class="desc">
                <p>{{inner.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      list: [
        {
          title: '热门推荐',
          more: '排行榜',
          to: '/detail',
          item: [
            {
              id: 1,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 2,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 3,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 4,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            }
          ]
        },
        {
          title: '热门推荐',
          more: '排行榜',
          to: '/detail',
          item: [
            {
              id: 14,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 25,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 34,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            },
            {
              id: 41,
              imgsrc: '//i2.hdslb.com/bfs/archive/403c71b68ca57b339bf46d53d77d7b897c09ab7f.jpg@320w_200h.webp',
              view: '28万',
              number: '21545',
              desc: '霸权续作 ！ 神仙新作 ！ 四月好看的新番居然有这么多！'
            }
          ]
        }
      ]
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
            overflow: hidden
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
                padding:.2rem 0
</style>
