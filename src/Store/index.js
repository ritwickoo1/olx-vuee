import {createApp} from 'vue';
import Vuex from 'vuex';
import App from '../App.vue'
import Products from './modules/Prdoucts';
// load vuex
createApp(App).use(Vuex)

// Create Store

export default new Vuex.Store({
    modules:{
        Products,

    }
})