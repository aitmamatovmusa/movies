<script setup>
import Sidebar from "@/layouts/Sidebar.vue";
import Search from "@/layouts/Search.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <Sidebar />
      <v-main class="main">
        <div class="wrapper">
          <Search />
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
