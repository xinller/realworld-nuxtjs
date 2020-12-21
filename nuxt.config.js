module.exports = {
  router: {
    // 自定义路由表规则
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      console.log('routes', routes)
      //   清除nuxt.js基于pages目录默认生成的路由表规则
      routes.splice(0)
      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                path: '', //默认子路由
                name: 'home',
                component: resolve(__dirname, 'pages/home/'),
              },
              {
                path: '/login', //login
                name: 'login',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/register', //register
                name: 'register',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/profile/:username', //profile
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/'),
              },
              {
                path: '/settings', //settings
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/'),
              },
              {
                path: '/editor', //editor
                name: 'editor',
                component: resolve(__dirname, 'pages/editor/'),
              },
              {
                path: '/article/:slug', //article
                name: 'article',
                component: resolve(__dirname, 'pages/article/'),
              },
            ],
          },
        ]
      )
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  // 注册插件
  plugins: ['~/plugins/request.js', '~/plugins/dayjs.js'],
}
