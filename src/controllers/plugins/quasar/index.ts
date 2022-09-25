import quasar_lang from "quasar/lang/pt-BR";
import quasar_icon_set from "quasar/icon-set/svg-fontawesome-v6";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import { Cookies, Notify } from "quasar";

export default {
  plugins: {
    Notify,
    Cookies,
  },
  config: {
    dark: true,
  },
  lang: quasar_lang,
  iconSet: quasar_icon_set,
};
