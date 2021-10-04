import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import VueBarcode from "@chenfengyuan/vue-barcode";

const app = createApp(App);

app.component(VueBarcode.name, VueBarcode);

app.mount("#app");