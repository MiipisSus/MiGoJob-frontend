import { defineStore } from "pinia";
import ApiService from "@/services/api.service";
import type { Job } from "./interfaces";

const useJobStore = defineStore("job", {
  state: () => ({
    keyword: "",
    jobs: [] as Job[],
  }),
  actions: {
    async fetchJobs() {
      try {
        const res = await ApiService.get(`/jobs?keyword=${this.keyword}`);
        this.jobs = res.data;
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    },
    async fetchJob(id: number) {
      try {
        const res = await ApiService.get(`/jobs/${id}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    },
  },
});

export default useJobStore;
