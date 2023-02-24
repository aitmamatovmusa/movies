import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Movie from "@/pages/Movie/Movie.vue";
import Search from "@/pages/Search/Search.vue";

export const paths = {
  home: "/",
  movie: "/movie/:id",
  search: "/search",
};

const routes = [
  { name: "Home", path: paths.home, component: Home },
  { name: "Movie", path: paths.movie, component: Movie },
  { name: "Search", path: paths.search, component: Search },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
