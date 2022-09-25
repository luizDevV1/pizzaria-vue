import { createApp } from "vue";
import "./views/sass/quasar.css";
import App from "./App.vue";
import { Quasar } from "quasar";
import options from "./controllers/plugins/quasar";
import { store } from "~plugins/store";
import { router } from "~plugins/router";

const app = createApp(App);

app.use(Quasar, options).use(store).use(router);

app.mount("#app");
