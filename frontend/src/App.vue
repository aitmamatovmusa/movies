<script setup>
import Sidebar from "@/layouts/Sidebar.vue";
</script>

<template>
  <v-card>
    <v-layout>
      <Sidebar />
      <v-main class="main">
        <div class="wrapper">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.main {
  height: 100vh;
}
.wrapper {
  padding: 10px;
}
</style>
