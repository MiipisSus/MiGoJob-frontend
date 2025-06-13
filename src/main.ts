import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#e0b96033",
      100: "#e0b96040",
      200: "#e0b96066",
      300: "#e0b96099",
      400: "#e0b960cc",
      500: "#e0b960ee",
      600: "#b5913dff",
      700: "#8b6b20ff",
      800: "#8b6b20ff",
      900: "#8b6b20ff",
      950: "#8b6b20ff",
    },
  },
});

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: CustomPreset,
  },
});

app.mount("#app");
