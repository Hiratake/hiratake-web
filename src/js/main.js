// ================================================================================
// (c) 2020 Hiratake
// Main.js
// ================================================================================

import Vue          from 'vue';
import App          from '../vue/App.vue';
import VueLazyLoad  from 'vue-lazyload';

Vue.use( VueLazyLoad, {
  preLoad: 1.2,
  loading: '/img/loading.gif',
  attempt: 1,
  throttleWait: 100
});

new Vue({
  el: '#app',
  render: h => h( App )
});
