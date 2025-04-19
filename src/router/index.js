import { createWebHistory, createRouter } from "vue-router";

// pages
import home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
  ],
});
export default router;
