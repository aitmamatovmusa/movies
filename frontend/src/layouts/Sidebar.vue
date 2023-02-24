<script setup>
import { paths } from "@/router";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { width } = useDisplay();
const drawer = computed(() => width.value > 750);
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    expand-on-hover
    class="pt-1"
    permanent
    width="150"
  >
    <v-list-item title="Home" :to="paths.home" link nav>
      <template v-slot:prepend>
        <v-icon class="fa-solid fa-house"></v-icon>
      </template>
    </v-list-item>
  </v-navigation-drawer>
</template>
