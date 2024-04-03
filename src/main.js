import { createApp } from "vue";

import "./general.scss";
import App from "./App.vue";

//Import Axios
import axios from "axios";
import VueAxios from "vue-axios";
//import vue router
import { router } from "../router";

createApp(App).use(VueAxios, axios).use(router).mount("#app");
