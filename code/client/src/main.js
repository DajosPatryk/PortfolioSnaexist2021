import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCarousel from 'vue-carousel';
import animate from 'animate.css';
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false;
Vue.use(VueCarousel);
Vue.use(VueObserveVisibility);

new Vue({
  router,
  vuetify,
  VueCarousel,
  animate,
  render: h => h(App)
}).$mount('#app')
