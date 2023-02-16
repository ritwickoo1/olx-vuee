import App from './App.vue'
import router from './routes'
import * as Vue from 'vue';
import chart from './components/Admin/Chart'
import chartkick from 'vue-chartkick';
// Store
import store from './Store/index'
Vue.createApp(App).use(chart).use(store).use(router).mount('#app');