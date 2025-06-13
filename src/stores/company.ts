import { defineStore } from "pinia";
import ApiService from "@/services/api.service";

const useCompanyStore = defineStore("company", {
  state: () => ({}),
  actions: {
    fetchCompanies() {
      return ApiService.get("/companies");
    },
    async fetchCompany(id: number) {
      const res = await ApiService.get(`/companies/${id}`);
      return res.data;
    },
  },
});

export default useCompanyStore;
