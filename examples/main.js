import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;


import VuePicMagnifier from '../packages/magnifier/index';
Vue.use(VuePicMagnifier);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
