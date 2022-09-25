import { createApp } from "vue";
import "./views/sass/quasar.css";
import App from "./App.vue";
import { Quasar } from "quasar";
import options from "./controllers/plugins/quasar";

const app = createApp(App);

app.use(Quasar, options);

app.mount("#app");
