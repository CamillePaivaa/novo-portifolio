import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "../src/router/router";

loadFonts();

const app = createApp(App);
app.use(vuetify); // Usando o Vuetify
app.use(router); // Usando o Vue Router
app.mount("#app"); // Montando a aplicação
