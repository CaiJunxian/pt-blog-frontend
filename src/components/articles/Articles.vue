<template>
  <section class="articles">
    <table>
      <tbody>
      <tr>
        <th>标题</th>
        <th>日期</th>
        <th>选项</th>
      </tr>
      <tr v-for="(article, index) in articles">
        <td>{{article.title}}</td>
        <td>{{article.createdTime | toDate}}</td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Articles',
    methods: {
      ...mapActions(['getArticles'])
    },
    created () {
      this.getArticles()
    },
    computed: {
      ...mapState(['articles'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/const.styl"

  section.articles
    position absolute
    left 200px
    top 50px
    bottom 0
    width calc(100% - 200px)
    overflow-y auto
    table
      position absolute
      left 50%
      transform translate(-50%, 0)
      top 150px
      width 60%
      tr
        height 50px
        th
          font-weight normal
          cursor pointer
          &:first-of-type
            width 40%
            min-width 40px
          &:nth-of-type(2)
            width 30%
            min-width 200px
          &:last-of-type
            width 30%
            min-width 100px
            cursor default
        td:first-of-type
          color blue1
          cursor pointer
        td:nth-of-type(2)
          text-align center
        td i
          color blue2
          cursor pointer
        td i:after
          display inline-block
          width 10px
          content ''
</style>
