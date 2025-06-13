<script setup lang="ts">
import DataView from "primevue/dataview";
import { defineProps, computed } from "vue";

import useJobStore from "@/stores/job";
import type { Company } from "@/stores/interfaces";
const props = defineProps<{
  company?: Company;
}>();
const jobStore = useJobStore();
const jobs = computed(() => props.company?.jobs ?? jobStore.jobs);
</script>

<template>
  <DataView
    :value="jobs"
    class="!rounded-md overflow-hidden shadow-md max-w-2/3 w-full mx-auto"
    paginator
    :rows="6"
  >
    <template #list="slotProps">
      <div class="flex flex-col overflow-auto">
        <li v-for="(job, index) in slotProps.items" :key="job.id">
          <div class="flex m-5 h-30">
            <div class="flex flex-col">
              <div class="flex">
                <a
                  class="font-bold text-lg text-secondary hover:text-secondary-600 transition duration-200"
                  :href="`/job/${job.id}`"
                  >{{ job.name }}</a
                >
                <p class="flex ml-auto text-sm items-center space-x-1">
                  <span class="font-bold">月薪 </span>
                  <span>NT.</span>
                  <span class="font-bold text-secondary">{{
                    job.salary_min
                  }}</span>
                  <span>~</span>
                  <span class="font-bold text-secondary">{{
                    job.salary_max
                  }}</span>
                  <span>元</span>
                </p>
              </div>

              <a
                class="text-sm font-bold text-primary-600 hover:text-primary-700 transition duration-200"
                :href="`/company/${job.company_id}`"
              >
                {{ job.company_name ? job.company_name : "" }}
              </a>
              <p class="w-6/7 line-clamp-3 text-sm text-gray-500">
                {{ job.description }}
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
</template>
