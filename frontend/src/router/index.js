import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";

export const paths = {
  home: "/",
};

const routes = [{ path: paths.home, component: Home }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
