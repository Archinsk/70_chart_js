import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/doughnut",
    name: "doughnut",
    component: () => import("../views/DoughnutView.vue"),
  },
  {
    path: "/bar",
    name: "bar",
    component: () => import("../views/BarView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
