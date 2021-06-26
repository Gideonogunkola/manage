import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "./components/Header";
import VueCarousel from "vue-carousel";
import "@/assets/css/index.css";

Vue.component("Header", Header);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
