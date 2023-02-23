<script setup>
import { httpGet } from "@/services/axios";
import { getOnlyYear } from "@/helpers";
import { onMounted, ref } from "vue";

const mediaList = ref([]);
const page = ref(1);

async function loadMore() {
  page.value++;
  const results = await getMediaList();
  mediaList.value = [...mediaList.value, ...results];
}

async function getMediaList() {
  const { results } = await httpGet("movie/top_rated", `&page=${page.value}`);
  return results.map((media) => {
    return {
      ...media,
      release_date: getOnlyYear(media.release_date),
      vote_average: media.vote_average.toFixed(1),
    };
  });
}

onMounted(async () => {
  const results = await getMediaList();
  mediaList.value = results;
});
</script>

<template>
  <h2 class="mb-3">Top Rated</h2>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="media in mediaList"
        :key="media.poster_path"
        cols="12"
        lg="2"
        sm="3"
        xs="6"
      >
        <v-img
          class="media-img rounded-xl"
          height="200px"
          width="150px"
          :style="{
            background: `linear-gradient(0deg, rgba(40,40,40,0.8) 0%, rgba(255,255,255,0.1) 100%), url('https://image.tmdb.org/t/p/w185${media.poster_path}') no-repeat center center / cover`,
          }"
          cover
        >
          <div class="media-description">
            <div class="media-group mt-auto">
              <div class="d-flex mb-2">
                <span class="media-rating mr-2">
                  <v-icon class="mr-1 fa-solid fa-star"></v-icon>
                  <span>{{ media.vote_average }}</span>
                </span>
                <span class="media-year">{{ media.release_date }}</span>
              </div>
              <router-link
                target="_blank"
                :to="`movie/${media.id}`"
                class="media-title"
              >
                {{ media.title }}
              </router-link>
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <div v-if="mediaList.length" class="text-center">
      <v-btn @click="loadMore" class="mt-5" variant="tonal">Load more</v-btn>
    </div>
  </v-container>
</template>

<style scoped>
.media-description {
  height: 100%;
  padding: 10px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.media-title {
  display: block;
  width: 100%;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  color: white;
}
.media-year,
.media-rating {
  font-size: 12px;
  display: inline-block;
  padding: 2px 10px;
  background-color: #282727e3;
  border-radius: 20px;
  color: white;
}
.media-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
:deep(.media-rating i) {
  vertical-align: middle;
  font-size: 12px;
  color: rgb(240, 153, 3);
}
.media-group {
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
