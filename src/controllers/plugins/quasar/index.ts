import iconSet from "quasar/icon-set/fontawesome-v5";
import lang from "quasar/lang/pt-BR";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import "quasar/src/css/index.sass";
import { Dialog, Loading, Notify } from "quasar";

export default {
  config: {},
  plugins: {
    Dialog,
    Loading,
    Notify,
  },
  lang,
  iconSet,
};
