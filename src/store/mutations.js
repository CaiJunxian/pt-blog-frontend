/**
 * Created by CaiJunxian on 2017/6/29.
 */
import {keys, setLocalStorage} from '@/common/js/localStorageUtil'

export default {
  setUser (state, user) {
    state.user = user
  },
  setAccessToken (state, accessToken) {
    setLocalStorage(keys.ACCESS_TOKEN, accessToken)
    state.accessToken = accessToken
  },
  setArchives (state, archives) {
    state.archives = archives
  },
  setArticles (state, articles) {
    state.articles = articles
  },
  setArticle (state, article) {
    state.article = article
  }
}
