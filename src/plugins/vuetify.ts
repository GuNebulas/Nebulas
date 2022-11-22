// Vuetify
import { createVuetify } from "vuetify";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify(
  {
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  }

  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
);
