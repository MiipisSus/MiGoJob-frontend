<script setup lang="ts">
import { useRouter } from "vue-router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import useJobStore from "@/stores/job";

const router = useRouter();
const jobStore = useJobStore();

const handleSearch = async () => {
  if (router.currentRoute.value.path !== "/search") {
    router.push("/search");
  } else {
    await jobStore.fetchJobs();
  }
};
</script>

<template>
  <div class="flex place-content-center w-3/5 h-13 gap-3">
    <InputText
      v-model="jobStore.keyword"
      class="w-3/5 !shadow-md"
      placeholder="關鍵字（如:全端工程師）"
    />
    <Button
      type="button"
      label="搜尋"
      icon="pi pi-search"
      raised
      @click="handleSearch"
    />
  </div>
</template>
