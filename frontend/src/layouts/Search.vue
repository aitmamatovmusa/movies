<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const search = ref();
const router = useRouter();

function searchValue() {
  if (search.value) {
    router.push(`search?value=${search.value}`);
  }
}
</script>

<template>
  <div class="search">
    <v-text-field
      v-model="search"
      placeholder="Search"
      density="compact"
      class="search-field"
      @keyup.enter="searchValue"
    >
      <template v-slot:prepend>
        <v-icon class="search-icon fa-solid fa-magnifying-glass"
      /></template>
    </v-text-field>
  </div>
</template>

<style scoped>
.search {
  display: flex;
}
.search-field {
  margin-left: auto;
  max-width: 250px;
}
</style>
