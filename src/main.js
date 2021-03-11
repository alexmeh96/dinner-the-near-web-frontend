import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import notifier from './plugins/notifier';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  notifier,
  render: h => h(App)
}).$mount('#app')
