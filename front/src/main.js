import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

import "./assets/main.scss";
import "./assets/variable.scss";

const app = createApp(App);

app.use(router);
app.component('Navigation', Navigation)
app.component('Footer', Footer)
app.mount("#app");
