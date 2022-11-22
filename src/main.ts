import { createApp, App } from "vue";
import { createPinia } from "pinia";
import AppMain from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createI18n } from "vue-i18n";
import en from "./assets/i18n/en";
import cn from "./assets/i18n/cn";

// Global style
import "./global.css";
loadFonts();

const app: App = createApp(AppMain);
const pinia = createPinia();
const i18n = createI18n({
  // something vue-i18n options here ...
  globalInjection: true,
  locale: "zh",
  messages: {
    en,
    zh: cn,
  },
  legacy: false,
});

app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount("#app");
