<template>
  <main class="wrap">
    <section class="archive">
      <ul>
        <li class="item" v-for="archive in archives">
          <p>{{archive.year}}</p>
          <ul>
            <li v-for="article in archive.articles">
              <span class="date">{{article.createTime}}</span>
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
            year: '2017-05',
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
            year: '2017-06',
            articles: [
              {
                title: 'test3',
                createTime: '2017-06-02 11:23:00'
              },
              {
                title: 'test4',
                createTime: '2017-05-20 13:23:00'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
