<script setup>
import { httpGet } from "@/services/axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mediaList = ref([]);

onMounted(async () => {
  const routeValue = route.query?.value;
  const { results } = await httpGet("search/movie", `&query=${routeValue}`);
  mediaList.value = results;
});
</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="media in mediaList"
        :key="media.id"
        cols="12"
        lg="2"
        sm="3"
        xs="6"
        class="rounded-lg mb-5"
      >
        <v-card class="search-card ma-1">
          <v-img
            :src="`https://image.tmdb.org/t/p/w300${media.poster_path}`"
            height="300"
            cover
          />

          <div class="search-media-details">
            <router-link
              target="_blank"
              class="search-media-link"
              :to="`movie/${media.id}`"
            >
              {{ media.title }}
            </router-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.search-card {
  height: 100%;
}
.search-media-details {
  padding: 5px;
  padding-top: 10px;
  text-align: center;
}
.search-media-link {
  color: #000;
  text-decoration: none;
  transition: 0.2s;
  font-size: 14px;
}
.search-media-link:hover {
  color: blue;
}
</style>
