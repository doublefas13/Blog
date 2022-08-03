import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "primevue/resources/themes/tailwind-light/theme.css";
import "primevue/resources/primevue.min.css";
import "./assets/tailwind.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
