<template>
  <main class="wrap">
    <section class="article">
      <article class="block">
        <div class="title">{{article.title}}</div>
        <div class="info">{{article.createdTime | toDate}}</div>
        <div class="content" v-html="article.content"></div>
      </article>
    </section>
  </main>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    name: 'Article',
    methods: {
      ...mapActions(['getArticle'])
    },
    computed: {
      ...mapState(['article'])
    },
    created () {
      this.getArticle(this.$route.query.id)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/const.styl"

  @media screen and (min-width: 701px)
    .wrap
      width 700px
      margin 0 auto

  *
    margin 0
    padding 0

  .wrap
    min-height 100%
    position relative

  section.article
    line-height 1.6
    padding-bottom 160px
    article
      .title
        margin 0.65em 0
        font-size 1.5em
      .info
        color black3
        margin 1.2em 0
        span
          margin-left 0.5rem
      .content
        h2, h3, h4, h5, h6
          position relative
          margin 1em 0
          &:before
            content "#"
            color blue1
            position absolute
            left -0.7em
            top -4px
            font-size 1.2em
            font-weight bold
        h4, h5, h6
          &:before
            content ""
        h2, h3
          font-size: 22px
        h4, h5, h6
          font-size 18px
        a
          color $green1
          word-break break-all
        blockquote
          margin 2em 0
          padding-left 20px
          border-left 4px solid $green1
        img
          display block
          max-width 100%
          margin 1em auto
        code, pre
          font-size 0.8em
          background-color #f8f8f8
          font-family 'Roboto Mono', Monaco, courier, monospace
          color #525252
</style>
