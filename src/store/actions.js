/**
 * Created by CaiJunxian on 2017/6/29.
 */
import Vue from 'vue'
import {API, CODE} from '@/common/js/consts'

export default {
  login ({commit}, user) {
    return Vue.http.post(`/${API}/login`, user)
      .then(response => {
        if (response.body.code === CODE.SUCCESS) {
          commit('setAccessToken', response.body.data.accessToken)
        } else {
          return Promise.reject(response.body.msg)
        }
      })
  }
}
