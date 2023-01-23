import { createRouter, createWebHistory } from 'vue-router'
import Main from "./components/home/main.vue";
import Specificitem from "./components/Specificitem/specificitem.vue"
import Cart from "./components/Cart/Cart.vue"
import LoginRegister from "./components/LoginRegister/LoginRegister.vue"
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
    },
    {
        path:'/LoginRegister',
        name:'LoginRegister',
        component:LoginRegister
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// Vue.use(VueRouter);
export default router;




