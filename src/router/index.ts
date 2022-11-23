import { createRouter, createWebHashHistory  } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: '/'
    }
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
