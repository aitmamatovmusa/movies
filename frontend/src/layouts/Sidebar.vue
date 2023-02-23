<script setup>
import { paths } from "@/router";
</script>
<template>
  <v-navigation-drawer class="pt-1" permanent width="150">
    <v-list-item title="Home" :to="paths.home" link nav>
      <template v-slot:prepend>
        <v-icon class="fa-solid fa-house"></v-icon>
      </template>
    </v-list-item>
  </v-navigation-drawer>
</template>
