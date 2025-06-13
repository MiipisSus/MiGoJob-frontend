interface Job {
  id: number;
  company_id: number;
  company_name: string;
  name: string;
  description: string;
  salary_min: number;
  salary_max: number;
  created_at: string;
  updated_at: string;
}

interface Company {
  id: number;
  name: string;
  average_salary: number;
  jobs: Job[];
  high_salary_jobs_count: number;
  description: string;
}

export type { Job, Company };
