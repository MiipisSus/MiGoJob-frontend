<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header class="shadow-sm z-10" />
    <main class="bg-gray-100 flex flex-1">
      <router-view class="w-full" />
    </main>
  </div>
</template>

<style scoped></style>
