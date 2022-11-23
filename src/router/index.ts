import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      name: "home",
    },
  ],
});

/**
 * Router Guard
 * Add validation before enter route
 */
router.beforeEach((to, from, next) => {
  next();
});

export default router;
