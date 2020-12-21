/** 基于axios封装的请求模块*/

import axios from 'axios'
// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

// 通过插件机制获取上下文对象(query\param\req\res\app\store...)
// 插件导出必须作为default成员
export default ({ store }) => {
  // console.log('store', store)
  // 请求拦截器
  // 任何请求都要经过请求拦截器
  // 可以在拦截器中做一些公共的业务处理.
  request.interceptors.request.use(
    function(config) {
      // 请求经过这里
      const { user } = store.state
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`
      }
      // 返回config请求配置对象
      return config
    },
    function(error) {
      // 如果失败(此时请求还没发出去)就会进入这里
      return Promise.reject(error)
    }
  )
}
