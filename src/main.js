// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
const app = createApp(App);
app.use(router); // Use o roteador na aplicação
app.mount("#app");
