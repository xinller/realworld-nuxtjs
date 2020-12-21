// 服务端渲染期间都是同一个实例
// 为了防止数据冲突,务必将state定义成一个函数 返回数据对象

const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
  return {
    user: null, //当前用户的登录状态
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const actions = {
  // 特殊的action
  // 服务端渲染期间调用
  // 初始化容器数据 传递数据给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    // 如果请求头有cookie
    if (req.headers.cookie) {
      // 用cookieparser 把cookie字符串转js对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // 提交mutation 修改state状态
    commit('setUser', auth)
  },
}
