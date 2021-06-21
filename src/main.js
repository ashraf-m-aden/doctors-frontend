import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faInfo, faEye } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CatCarousel from 'vue-cat-carousel'

Vue.use(CatCarousel)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faUserSecret, faSearch, faInfo, faEye, faFacebookF, faTwitter, faYoutube)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
