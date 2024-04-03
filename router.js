import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./src/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product",
      name: "product",
      /* component: , */
    },
    {
      path: "/checkout",
      name: "checkout",
      /* component: , */
    },
  ],
});
export { router };
