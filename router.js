import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./src/pages/HomePage.vue";
import ProductPage from "./src/pages/ProductPage.vue";
import CheckoutPage from "./src/pages/CheckoutPage.vue";
import ThankyouPage from "./src/pages/ThankyouPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductPage,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutPage,
    },
    {
      path: "/thankyou",
      name: "thankyou",
      component: ThankyouPage,
    },
  ],
});
export { router };
