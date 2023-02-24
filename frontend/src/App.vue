<script setup>
import Sidebar from "@/layouts/Sidebar.vue";
import Search from "@/layouts/Search.vue";
import { useRoute } from "vue-router";

const route = useRoute();

function showSearchField() {
  const matchedName = route.matched[0]?.name;
  switch (matchedName) {
    case "Home":
    case "Search":
      return true;
    default:
      return false;
  }
}
</script>

<template>
  <v-card>
    <v-layout>
      <Sidebar />
      <v-main class="main">
        <div class="wrapper">
          <Search v-if="showSearchField()" />
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.main {
  height: 100vh;
  overflow-y: auto;
}
.wrapper {
  padding: 10px;
}
</style>
