import { createRouter, createWebHistory } from 'vue-router'
import Main from "./components/home/main.vue";
import Specificitem from "./components/Specificitem/specificitem.vue"
import Cart from "./components/Cart/Cart.vue"
const routes = [{
        path:'/',
        name:'Main',
        component:Main, 
    },
    {
        path:'/Specificitem',
        name:'Specificitem',
        component:Specificitem
    },
    {
        path:'/Cart',
        name:'Cart',
        component:Cart
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// Vue.use(VueRouter);
export default router;




