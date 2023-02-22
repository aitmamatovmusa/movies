<script setup>
import { ref, onMounted } from "vue";
import { httpGet } from "@/services/axios";

const slides = ref([]);

async function getTrendingSlides() {
  // trending/movie/week
  const { results } = await httpGet("top_rated");
  return results;
}

onMounted(async () => {
  const results = (await getTrendingSlides()) || [];

  slides.value = results.map((result) => {
    return {
      ...result,
      release_date: result.release_date.substring(0, 4),
    };
  });
});
</script>

<template>
  <h2 class="mb-3">Trending Movie</h2>

  <v-carousel hide-delimiters height="400" show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-card
        class="slide-card rounded-lg"
        height="100%"
        :image="`https://image.tmdb.org/t/p/original${slide.backdrop_path}`"
      >
        <div class="card-wrapper">
          <v-img
            class="card-poster"
            :src="`https://image.tmdb.org/t/p/w185${slide.poster_path}`"
            height="200px"
            width="150px"
          />
          <div class="card-detail">
            <h4 class="mb-2">{{ slide.title }}</h4>
            <ul class="card-slide-list mb-2">
              <li>{{ slide.release_date }}</li>
              <li>{{ slide.vote_average }}</li>
            </ul>
            <p class="card-overview-text">{{ slide.overview }}</p>
          </div>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.slide-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-wrapper {
  display: flex;
  padding: 0 8%;
  width: 100%;
  color: white;
}
.card-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-color: #000;
}
.card-poster {
  margin-right: 50px;
  max-width: 150px;
}
.card-detail {
  margin-top: 30px;
  position: relative;
  z-index: 3;
}
.card-overview-text {
  font-size: 13px;
}
.card-slide-list {
  list-style: none;
  display: flex;
}
.card-slide-list li::after {
  display: inline-block;
  padding: 0 10px;
  content: "|";
  position: relative;
  top: 0;
  right: 0;
}
.card-slide-list li:last-child::after {
  display: none;
}
</style>
