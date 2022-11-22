import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
    userInfo: {
      name: "anonymous",
    },
  }),
  actions: {
    login() {
      this.$patch({
        isLogin: true,
        userInfo: {
          name: "Nebulas",
        },
      });
    },
    logout() {
      this.$patch({
        isLogin: false,
        userInfo: {},
      });
    },
  },
});
