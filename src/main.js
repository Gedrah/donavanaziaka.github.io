import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import LandingPage from "./pages/LandingPage";

Vue.config.productionTip = false;
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');