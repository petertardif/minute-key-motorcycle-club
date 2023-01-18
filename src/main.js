// Components
import App from "./App.vue";
import { store } from "./store/store";
import ListView from "../src/components/ListView.vue";
import LandingPage from "../src/components/LandingPage.vue";

// Composables
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Plugins
import { registerPlugins } from "@/plugins";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/list", component: ListView },
    { path: "/", component: LandingPage },
  ],
});

const app = createApp(App);

registerPlugins(app);

app.use(store);
app.use(router);

app.mount("#app");
