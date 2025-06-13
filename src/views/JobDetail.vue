<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Fieldset from "primevue/fieldset";

import useJobStore from "@/stores/job";
import type { Job } from "@/stores/interfaces";
import BreadcrumbRouter from "@/components/BreadcrumbRouter.vue";

const route = useRoute();
const jobStore = useJobStore();
const job = ref({} as Job);

onMounted(async () => {
  job.value = await jobStore.fetchJob(+route.params.id);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <BreadcrumbRouter class="w-4/5" />
    <div
      class="flex flex-col items-center w-4/5 h-9/10 p-5 bg-white rounded-md shadow-md"
    >
      <div class="flex flex-col h-full mt-5 ml-5 mr-auto gap-2">
        <div class="flex flex-col gap-2">
          <p class="text-2xl font-bold">{{ job.name }}</p>
          <a
            class="hover:text-emerald-500 transition duration-200"
            :href="`/company/${job.company_id}`"
            >{{ job.company_name }}</a
          >
        </div>
        <Fieldset legend="職缺描述" class="overflow-scroll h-1/3">
          <p class="text-sm text-gray-600">{{ job.description }}</p>
        </Fieldset>
        <Fieldset legend="工作待遇">
          <p class="text-sm text-gray-600">
            NT. {{ job.salary_min }} ~ NT. {{ job.salary_max }} 元
          </p>
        </Fieldset>
      </div>
    </div>
  </div>
</template>
