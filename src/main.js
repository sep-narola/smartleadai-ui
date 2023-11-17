import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../public/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPen,
  faEllipsis,
  faBars,
  faInbox,
  faBullhorn,
  faFilter,
  faTriangleExclamation,
  faCircleExclamation,
  faBan,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCirclePause,
  faCirclePlay,
  faPen,
  faEllipsis,
  faBars,
  faInbox,
  faBullhorn,
  faFilter,
  faTriangleExclamation,
  faCircleExclamation,
  faBan
);
const app = createApp(App);

app.use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
