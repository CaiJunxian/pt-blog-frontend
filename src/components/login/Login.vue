<template>
  <section class="login">
    <div class="form" @keyup.enter="doLogin">
      <p class="input">
        <svg class="icon svg-comm svg-comm-width" aria-hidden="true">
          <use xlink:href="#icon-person"></use>
        </svg>
        <input type="text" name="userName" placeholder="用户名" v-model.trim="userName">
      </p>
      <p class="input">
        <svg class="icon svg-comm svg-comm-width" aria-hidden="true">
          <use xlink:href="#icon-fingerprint"></use>
        </svg>
        <input type="password" placeholder="密码" v-model.trim="password">
      </p>
      <p class="info">{{info}}</p>
      <p class="button">
        <button @click="doLogin">登录</button>
      </p>
    </div>
  </section>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'Login',
    data () {
      return {
        userName: '',
        password: '',
        info: ''
      }
    },
    methods: {
      doLogin () {
        if (!this.userName) {
          this.info = '请输入用户名'
          return
        }
        if (!this.password) {
          this.info = '请输入密码'
          return
        }
        this.login({userName: this.userName, password: this.password})
          .then(() => {
            alert('login success')
          })
          .catch(msg => {
            this.info = msg
            return
          })
      },
      clearInfo () {
        this.info = ''
      },
      ...mapActions([
        'login'
      ])
    },
    watch: {
      userName: 'clearInfo',
      password: 'clearInfo'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/stylus/const"

  section.login
    .form
      width 500px
      height 400px
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      > p
        height 50px
        text-align center
        transition all 0.4s
        &.info
          margin 10px
          font-size 12px
          height 20px
          color black3
        &.input:hover
          color blue2
        input
          width 200px
          padding 8px
          border none
          outline none
          border-bottom 1px solid blue1
          border-radius 3px
          background-color transparent
          transition all 0.4s
          &:focus
            width 210px
        button
          width 60px
          height 30px
          border-radius 4px
          border 1px solid blue1
          outline none
          color black3
          background-color transparent
          cursor pointer
          transition all 0.4s
          &:hover
            background-color blue2
            color #FFF
</style>

