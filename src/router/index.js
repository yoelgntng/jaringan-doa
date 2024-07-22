import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // Tambahkan rute lain di sini jika diperlukan
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
