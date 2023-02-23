<script setup>
import { httpGet } from "@/services/axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movieDetails = ref();
const movieTrailer = ref();

const movieTrailerLink = computed(() => {
  return movieTrailer.value?.key
    ? `https://www.youtube.com/watch?v=${movieTrailer.value.key}`
    : "";
});

onMounted(async () => {
  const movieId = route.params?.id;
  if (movieId) {
    const movieResult = await httpGet(
      `movie/${movieId}`,
      "&append_to_response=videos"
    );

    const videos = movieResult?.videos.results;
    const trailer = videos.find((video) => {
      if (video?.site == "YouTube" && video?.type == "Trailer") {
        return video;
      }
    });

    movieDetails.value = movieResult;
    movieTrailer.value = trailer;
  }
});
</script>
<template>
  <div
    class="movie"
    :style="`background-image: url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`"
  >
    <div class="movie-wrapper">
      <h1 class="movie-title">{{ movieDetails?.title }}</h1>
      <div class="mb-3">
        <span>Release date {{ movieDetails?.release_date }}</span>
        <div class="movie-rating">
          <span>Rating {{ movieDetails?.vote_average }}</span>
        </div>
      </div>
      <div class="mb-3">
        <span
          class="movie-genre"
          v-for="genre in movieDetails?.genres"
          :key="genre"
          >{{ genre.name }}
        </span>
      </div>

      <p class="movie-overview mb-3">{{ movieDetails?.overview }}</p>

      <v-btn
        :disabled="!movieTrailerLink"
        tag="a"
        target="_blank"
        :href="movieTrailerLink"
        flat
      >
        Trailer
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.movie {
  margin: -10px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: white;
}
.movie::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.5;
}
.movie-wrapper {
  padding: 5%;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
.movie-overview {
  max-width: 50%;
  font-size: 13px;
}
.movie-genre {
  font-weight: 600;
}
.movie-genre::after {
  content: "|";
  display: inline-block;
  padding: 0 10px;
  position: relative;
  top: 0;
  left: 0;
  color: white;
}
.movie-genre:last-child::after {
  display: none;
}
</style>
