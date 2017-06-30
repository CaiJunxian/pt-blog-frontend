/**
 * Created by CaiJunxian on 2017/6/30.
 */
const keys = {
  ACCESS_TOKEN: 'accessToken'
}
const getLocalStorage = (key) => {
  window.localStorage.getItem(key) || ''
}

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export {
  keys, getLocalStorage, setLocalStorage
}
