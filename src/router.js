import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import List from "./pages/List.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./pages/About.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },
  {
    path: "/drawer",
    name: "drawer",
    component: () =>
      import(/* webpackChunkName: "list" */ "./pages/Drawer.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import(/* webpackChunkName: "list" */ "./pages/Cards.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
