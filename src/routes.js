import { createRouter, createWebHistory } from 'vue-router'
import Main from "./components/home/main.vue";
import Specificitem from "./components/Specificitem/specificitem.vue"
const routes = [{
        path:'/',
        name:'Main',
        component:Main, 
    },
    {
        path:'/Specificitem',
        name:'Specificitem',
        component:Specificitem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// Vue.use(VueRouter);
export default router;




