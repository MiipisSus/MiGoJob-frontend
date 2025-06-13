<script setup lang="ts">
import { onMounted } from "vue";

import useJobStore from "@/stores/job";
import SearchBar from "@/components/SearchBar.vue";
import JobDataView from "@/components/JobDataView.vue";
import BreadcrumbRouter from "@/components/BreadcrumbRouter.vue";

const jobStore = useJobStore();

onMounted(async () => {
  await jobStore.fetchJobs();
});
</script>

<template>
  <div class="flex flex-col pt-5 gap-8">
    <BreadcrumbRouter class="w-4/5 mx-auto" />
    <div class="flex place-content-center">
      <SearchBar class="w-full" />
    </div>
    <JobDataView />
  </div>
</template>

<style scoped></style>
