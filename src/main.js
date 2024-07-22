import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCog,
  faBorderAll,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

// Tambahkan ikon ke pustaka
library.add(faHome, faCog, faBorderAll, faClockRotateLeft);

const app = createApp(App);

// Daftarkan komponen FontAwesomeIcon
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
