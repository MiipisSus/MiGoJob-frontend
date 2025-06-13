import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import SearchPage from "@/views/SearchPage.vue";
import CompanyDetail from "@/views/CompanyDetail.vue";
import JobDetail from "@/views/JobDetail.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/search", component: SearchPage, name: "Search" },
  {
    path: "/company/:id",
    component: CompanyDetail,
    props: true,
    name: "CompanyDetail",
  },
  { path: "/job/:id", component: JobDetail, props: true, name: "JobDetail" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
