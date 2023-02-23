<script setup></script>

<template>
  <div class="search">
    <v-text-field placeholder="Search" density="compact" class="search-field">
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
