import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueScrollProgress from 'vue-scroll-progress'
var VueScrollactive = require('vue-scrollactive');
Vue.use(VueScrollactive);
Vue.use(VueScrollProgress)

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
