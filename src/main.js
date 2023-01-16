import App from './App.vue'
import router from './routes'
import * as Vue from 'vue';
import chart from 'chart.js';
import chartkick from 'vue-chartkick';
// Store
import store from './Store/index'
Vue.createApp(App).use(store).use(router).mount('#app');