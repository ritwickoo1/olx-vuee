import { createRouter, createWebHistory } from 'vue-router'
import Main from "./components/home/main.vue";
import Specificitem from "./components/Specificitem/specificitem.vue"
import Cart from "./components/Cart/Cart.vue"
import LoginRegister from "./components/LoginRegister/LoginRegister.vue"
import UserProfile from "./components/UserProfile/UserProfile.vue"
import SearchP from "./components/Search/SearchP.vue"
import AuthGarud from './Garuds/AuthGarud';
import LoginRegGarud from './Garuds/LoginRegGarud';
// import AdminGard from './Garuds/AdminGard';
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
        component:LoginRegister,
        beforeEnter:(to, from, next) => {
            LoginRegGarud(to, from, next);
        }
    },
    {
        path:'/UserProfile',
        name:'UserProfile',
        component:UserProfile,
        beforeEnter:(to, from, next) => {
            AuthGarud(to, from, next);
        }
    },
    {
        path:'/Search',
        name:'SearchP',
        component:SearchP
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// Vue.use(VueRouter);
export default router;




