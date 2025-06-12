<script setup lang="ts">
import { onMounted } from "vue";
import DataView from "primevue/dataview";

import useJobStore from "@/stores/job";
import SearchBar from "@/components/SearchBar.vue";

const jobStore = useJobStore();

onMounted(async () => {
  await jobStore.fetchJobs();
});
</script>

<template>
  <div class="flex flex-col p-15 gap-10">
    <div class="flex place-content-center">
      <SearchBar class="w-full" />
    </div>
    <DataView
      :value="jobStore.jobs"
      class="!rounded-md overflow-hidden shadow-md"
      paginator
      :rows="6"
    >
      <template #list="slotProps">
        <div class="flex flex-col overflow-auto">
          <li v-for="(job, index) in slotProps.items" :key="job.id">
            <div class="flex m-5 h-30">
              <div class="">
                <p class="font-bold text-lg">{{ job.name }}</p>
                <a
                  class="text-sm hover:text-emerald-500 transition duration-200"
                  :href="`/company/${job.company_id}`"
                >
                  {{ job.company_name }}
                </a>
              </div>
              <div class="ml-auto">
                <p>
                  月薪 NT. {{ job.salary_min }} ~ NT. {{ job.salary_max }} 元
                </p>
              </div>
            </div>
            <hr
              class="border-t border-gray-300 mx-5"
              v-if="index !== slotProps.items.length - 1"
            />
          </li>
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped></style>
