// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// Import F7
import Framework7 from 'framework7'
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'
// Import css
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'

import router from './router'

Vue.use(Framework7Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: router,

  },
  components: { App },
  template: '<App/>'
})
