<template>
  <main class="wrap">
    <section class="archive">
      <ul>
        <li class="item" v-for="archive in archives">
          <p>{{archive.date | toMonth}}</p>
          <ul>
            <li v-for="article in archive.articles">
              <span class="date">{{article.createTime | toDate}}</span>
              <span class="title">{{article.title}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Archives',
    data () {
      return {
        archives: [
          {
            date: '2017-05',
            articles: [
              {
                title: 'test1',
                createTime: '2017-05-01 11:23:00'
              },
              {
                title: 'test2',
                createTime: '2017-05-02 13:23:00'
              }
            ]
          },
          {
            date: '2017-06',
            articles: [
              {
                title: 'test3',
                createTime: '2017-06-02 11:23:00'
              },
              {
                title: 'test4',
                createTime: '2017-06-20 13:23:00'
              }
            ]
          }
        ]
      }
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
