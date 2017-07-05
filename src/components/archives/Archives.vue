<template>
  <main class="wrap">
    <section class="archive">
      <ul>
        <li class="item" v-for="archive in archives">
          <p>{{archive.date | toMonth}}</p>
          <ul>
            <li v-for="article in archive.articles">
              <span class="date">{{article.createdTime | toDate}}</span>
              <router-link :to="{name:'Article',query:{id:article._id}}"
                           tag="span"
                           class="title">
                {{article.title}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Archives',
    methods: {
      ...mapActions(['getArchives'])
    },
    computed: {
      ...mapState(['archives'])
    },
    created () {
      this.getArchives()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/const"

  @media screen and (min-width: 701px)
    .wrap
      width 700px
      margin 0 auto

  main.wrap
    min-height 100%
    position relative

  section.archive
    padding-bottom 160px
    ul
      padding 0
      li
        list-style none
        padding 2px 0 0 40px
        p
          font-size 20px
          color black2
        span
          display block
          margin 4px 0
        span.date
          float left
          width 180px
          color black3
        span.title
          margin-left 130px
          color blue1
          cursor pointer
          word-break break-all
          &:hover
            color blue2
</style>
