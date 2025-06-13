<script setup>
import { ref, computed } from "vue";
import Breadcrumb from "primevue/breadcrumb";
import { useRoute } from "vue-router";

const home = { icon: "pi pi-home", route: "/" };
const route = useRoute();

function buildBreadcrumbs(route) {
  const crumbs = [];

  if (route.name === "Search") {
    crumbs.push({ label: "搜尋結果", route: "/search" });
  } else if (route.name === "CompanyDetail") {
    crumbs.push({ label: "搜尋結果", route: "/search" });
    crumbs.push({
      label: `公司詳細`,
      route: { name: "CompanyDetail", params: { id: route.params.id } },
    });
  } else if (route.name === "JobDetail") {
    crumbs.push({ label: "搜尋結果", route: "/search" });
    crumbs.push({
      label: `職缺詳細`,
      route: { name: "JobDetail", params: { id: route.params.id } },
    });
  }

  return crumbs;
}
const items = computed(() => buildBreadcrumbs(route));
</script>

<template>
  <Breadcrumb :home="home" :model="items">
    <template #item="{ item, props }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="[item.icon, 'text-color']" />
          <span class="text-primary font-semibold">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span class="text-surface-700 dark:text-surface-0">{{
          item.label
        }}</span>
      </a>
    </template>
  </Breadcrumb>
</template>
