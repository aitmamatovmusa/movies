<script setup>
import { ref, onMounted, computed } from "vue";
import { httpGet } from "@/services/axios";
import { getOnlyYear } from "@/helpers";
import { useDisplay } from "vuetify";
import Search from "@/layouts/Search.vue";

const { width } = useDisplay();
const slides = ref([]);

const showArrows = computed(() => width.value > 600);

async function getTrendingSlides() {
  const { results } = await httpGet("trending/movie/week");
  return results;
}

onMounted(async () => {
  const results = (await getTrendingSlides()) || [];

  slides.value = results.map((result) => {
    return {
      ...result,
      release_date: getOnlyYear(result.release_date),
    };
  });
});
</script>

<template>
  <div class="movie-group">
    <h2 class="mb-3">Trending Movie</h2>
    <Search />
  </div>

  <v-carousel
    v-if="slides.length > 0"
    class="mb-5"
    hide-delimiters
    :show-arrows="showArrows"
    height="400"
  >
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
            <p class="card-overview-text mb-2">{{ slide.overview }}</p>
            <v-btn
              :to="`movie/${slide?.id}`"
              variant="outlined"
              class="card-detail-btn"
              tag="a"
              target="_blank"
              >Open</v-btn
            >
          </div>
        </div>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.movie-group {
  display: flex;
}
.slide-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
:deep(.search-field) {
  margin-left: auto;
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
  opacity: 0.6;
  background-color: #000;
}
.card-poster {
  margin-right: 50px;
  max-width: 150px;
}
.card-detail {
  margin-top: 10px;
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
.card-detail-btn {
  text-transform: none;
  font-size: 12px;
  padding: 8px 15px;
  height: auto;
  width: auto;
  border-radius: 15px;
}

@media only screen and (max-width: 600px) {
  .movie-group {
    flex-direction: column;
  }
  :deep(.search-field) {
    margin-left: 0;
  }
  .card-poster {
    display: none;
  }
}
</style>
