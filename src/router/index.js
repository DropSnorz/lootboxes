import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: "root", component: () => import("@/components/Chest") },
    { path: '/store', name: "store", component: () => import("@/components/Store") },
    { path: '/casino', name: "casino", component: () => import("@/components/Casino")},
  ]

});