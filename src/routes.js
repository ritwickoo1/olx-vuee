import { createRouter, createWebHistory } from 'vue-router'
import Main from "./components/home/main.vue";

const routes = [{
    path:'/',
    name:'Main',
    component:Main,
}]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// Vue.use(VueRouter);
export default router;




