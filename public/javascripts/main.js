var Vue = require('vue/dist/vue.js')

Vue.component('cruelWorld', require('./components/cruelWorld.vue'));

const app = new Vue({
  el: '#app'
})