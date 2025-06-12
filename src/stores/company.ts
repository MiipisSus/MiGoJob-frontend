import { defineStore } from "pinia";
import ApiService from "@/services/api.service";

const useCompanyStore = defineStore("company", {
  state: () => ({}),
  actions: {
    fetchCompanies() {
      return ApiService.get("/companies");
    },
    fetchCompany(id: number) {
      return ApiService.get(`/companies/${id}`);
    },
  },
});

export default useCompanyStore;
