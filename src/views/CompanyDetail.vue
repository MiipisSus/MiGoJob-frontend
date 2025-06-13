<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

import useCompanyStore from "@/stores/company";
import type { Company } from "@/stores/interfaces";
import JobDataView from "@/components/JobDataView.vue";
import BreadcrumbRouter from "@/components/BreadcrumbRouter.vue";

const route = useRoute();
const companyStore = useCompanyStore();
const company = ref({} as Company);

onMounted(async () => {
  company.value = await companyStore.fetchCompany(+route.params.id);
});
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <BreadcrumbRouter class="w-4/5" />
    <div
      class="flex flex-col items-center w-4/5 h-9/10 p-5 bg-white rounded-md shadow-md"
    >
      <div class="flex flex-col items-center gap-2">
        <p class="font-bold text-2xl text-center">
          {{ company.name }}
        </p>
        <p class="text-sm text-gray-600">
          <span class="font-medium text-gray-800">平均月薪：</span>
          <span class="text-secondary font-semibold"
            >NT. {{ company.average_salary }} 元</span
          >
          <span class="mx-2 text-gray-400">|</span>
          <span class="font-medium text-gray-800">高薪職缺：</span>
          <span class="text-secondary font-semibold"
            >{{ company.high_salary_jobs_count }} 筆</span
          >
        </p>
      </div>
      <Tabs value="0" class="w-4/5">
        <TabList class="flex m-auto">
          <Tab value="0">公司介紹</Tab>
          <Tab value="1">職缺列表</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">{{ company.description }}</TabPanel>
          <TabPanel value="1">
            <JobDataView :company="company" :rows="5" class="max-w-full" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>
