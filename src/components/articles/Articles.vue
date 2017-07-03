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
  export default {
    name: 'Articles',
    data () {
      return {
        articles: [
          {
            title: 'test1',
            createdTime: '2017-05-01'
          },
          {
            title: 'test1',
            createdTime: '2017-05-01'
          },
          {
            title: 'test1',
            createdTime: '2017-05-01'
          },
          {
            title: 'test1',
            createdTime: '2017-05-01'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
