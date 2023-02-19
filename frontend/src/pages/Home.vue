<script setup>
import { httpGet } from "@/services/axios";
import { onMounted, computed, ref } from "vue";

const mediaList = ref([]);
const page = ref(1);
const PER_PAGE = 20;

const slicedMediaList = computed(() => {
  const start = (page.value - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  return mediaList.value.slice(start, end);
});

const loadMore = () => {
  page.value++;
};

onMounted(async () => {
  const { results } = await httpGet("top_rated", `&page=${page.value}`);
  mediaList.value = results;
});
</script>

<template>
  <h2 class="mb-3">Top Movies</h2>
  <v-row>
    <v-col v-for="media in slicedMediaList" :key="media.image" cols="2">
      <v-img
        class="rounded-lg"
        :src="`https://image.tmdb.org/t/p/w185${media.poster_path}`"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        width="150px"
        cover
      />
    </v-col>
  </v-row>
  <div class="text-center">
    <v-btn @click="loadMore" class="mt-5" variant="tonal">Load more</v-btn>
  </div>
</template>
