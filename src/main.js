import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueNumerals from 'vue-numerals';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGifts, faGem, faBalanceScale, faCubes, faHammer, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import store from './store'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueNumerals)

library.add(faGifts, faGem, faBalanceScale, faCubes, faHammer, faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

store.mount()

new Vue({
  router,
  data: store,
  render: h => h(App),
}).$mount('#app')
