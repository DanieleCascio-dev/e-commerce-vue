import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//Import Axios
import axios from "axios";
import VueAxios from "vue-axios";
//import vue router
import { router } from "../router";

// Import Bootstrap and BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

createApp(App).use(VueAxios, axios, router).mount("#app");
