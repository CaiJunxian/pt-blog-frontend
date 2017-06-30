/**
 * Created by CaiJunxian on 2017/6/29.
 */
import {keys, getLocalStorage} from '@/common/js/localStorageUtil'

export default {
  user: {
    userName: '',
    password: ''
  },
  accessToken: getLocalStorage(keys.ACCESS_TOKEN),
  articles: [],
  article: {}
}
