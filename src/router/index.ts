import { createRouter, createWebHashHistory  } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
