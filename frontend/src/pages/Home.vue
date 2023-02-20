<script setup>
import { httpGet } from "@/services/axios";
import { onMounted, ref } from "vue";

const mediaList = ref([]);
const page = ref(1);

async function loadMore() {
  page.value++;
  const results = await getMediaList();
  mediaList.value = [...mediaList.value, ...results];
  console.log(mediaList.value);
}

async function getMediaList() {
  const { results } = await httpGet("top_rated", `&page=${page.value}`);
  return results;
}

onMounted(async () => {
  const results = await getMediaList();
  mediaList.value = results;
});
</script>

<template>
  <h2 class="mb-3">Top Movies</h2>
  <v-row>
    <v-col
      v-for="media in mediaList"
      :key="media.poster_path"
      cols="12"
      lg="3"
      sm="4"
      xs="8"
    >
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
