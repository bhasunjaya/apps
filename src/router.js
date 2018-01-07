import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}


import Home from 'src/components/page/Home.vue'
import Setting from 'src/components/page/Setting.vue'
import Notification from 'src/components/page/Notification.vue'
import CreatePost from 'src/components/page/CreatePost.vue'
import DetailPost from 'src/components/page/DetailPost.vue'
import MyPost from 'src/components/page/MyPost.vue'


export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: Home },
    { path: '/my-post', component: MyPost },
    { path: '/create-post', component: CreatePost },
    { path: '/detail-post/:id', component: DetailPost },
    { path: '/setting', component: Setting },
    { path: '/notification', component: Notification },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
