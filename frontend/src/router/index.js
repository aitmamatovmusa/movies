import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Movie from "@/pages/Movie/Movie.vue";

export const paths = {
  home: "/",
  movie: "/movie/:id",
};

const routes = [
  { path: paths.home, component: Home },
  { path: paths.movie, component: Movie },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
