<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-third to-secondary-100"
  >
    <p>
      <span class="text-3xl font-bold">尋找下一份工作...</span>
    </p>
    <SearchBar />
  </div>
</template>
