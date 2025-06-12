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

export type { Job };
