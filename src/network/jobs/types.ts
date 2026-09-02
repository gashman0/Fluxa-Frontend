export interface JobMetadataLocation {
  name: string;
}

export interface JobMetadataCompliance {
  type: string;
  requires_consent: boolean;
  requires_processing_consent: boolean;
  requires_retention_consent: boolean;
  retention_period: string | null;
}

export interface JobMetadata {
  absolute_url: string;
  data_compliance: JobMetadataCompliance[];
  education?: string;
  internal_job_id: number;
  location: JobMetadataLocation;
  metadata: unknown;
  id: number;
  updated_at: string;
  requisition_id: string;
  title: string;
  company_name: string;
  first_published: string;
  language: string;
  application_deadline: string | null;
}

export interface Job {
  _id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  url: string;
  source: string;
  externalId: string;
  publishedAt: string;
  metadata: JobMetadata;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface JobsResponse {
  success: boolean;
  count: number;
  jobs: Job[];
}