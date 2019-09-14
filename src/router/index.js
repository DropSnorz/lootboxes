import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: "root", component: () => import("@/components/Box") },
    { path: '/shop', name: "shop", component: () => import("@/components/Shop") },
  ]
   
});