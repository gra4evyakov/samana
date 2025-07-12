import "./assets/main.css";
import "swiper/css";
import { MotionPlugin } from "@vueuse/motion";

import { createApp } from "vue";
import App from "./App.vue";

import { init } from "./init";
init();

const app = createApp(App);

app.use(MotionPlugin);

app.mount("#app");
