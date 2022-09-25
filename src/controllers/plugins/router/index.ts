import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "~pages/home.vue";
import { ENUM_ROUTER_NAME } from "./util/enum-router-name";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: ENUM_ROUTER_NAME.HOME,
    component: Home,
    meta: {
      title: ENUM_ROUTER_NAME.HOME,
    } as PzMeta,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
