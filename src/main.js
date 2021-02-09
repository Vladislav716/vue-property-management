import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import router from './router'

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import Apps from './Layout/Wrappers/appLayout.vue';
import VueExpandableImage from 'vue-expandable-image';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueExpandableImage);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);
Vue.component('apps-layout', Apps);

const store = new Vuex.Store({
  state: {
    authenticated: false,
    admin: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login(state) {
      state.authenticated = true
    }
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store: store,
  components: { App },
});
