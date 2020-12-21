import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6dd77946 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _4d74add2 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _615954d6 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _497e47d6 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _778ac396 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _85752cc0 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _30488b23 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6dd77946,
    children: [{
      path: "",
      component: _4d74add2,
      name: "home"
    }, {
      path: "/login",
      component: _615954d6,
      name: "login"
    }, {
      path: "/register",
      component: _615954d6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _497e47d6,
      name: "profile"
    }, {
      path: "/settings",
      component: _778ac396,
      name: "settings"
    }, {
      path: "/editor",
      component: _85752cc0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _30488b23,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
