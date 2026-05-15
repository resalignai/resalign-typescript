// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Fetch extends APIResource {
  /**
   * Retrieve a single job posting with full description and company information.
   *
   * @example
   * ```ts
   * const jobPosting = await client.jobsBoard.fetch.retrieve(
   *   'job_id',
   * );
   * ```
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<JobPosting> {
    return this._client.get(path`/v1/jobs_board/fetch/${jobID}`, options);
  }

  /**
   * List active job postings from the jobs board with optional search, filters, and
   * pagination. Includes company information and user's saved status for each job.
   *
   * @example
   * ```ts
   * const fetches = await client.jobsBoard.fetch.list();
   * ```
   */
  list(
    query: FetchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FetchListResponse> {
    return this._client.get('/v1/jobs_board/fetch', { query, ...options });
  }
}

/**
 * Serialized job posting with company name and saved status.
 */
export interface JobPosting {
  /**
   * Unique job posting ID
   */
  id: string;

  /**
   * Company ID
   */
  company_id: string;

  /**
   * Company name
   */
  company_name: string;

  /**
   * Timestamp when job was first seen
   */
  first_seen_at: string;

  /**
   * Job title
   */
  job_title: string;

  /**
   * URL to apply for the job
   */
  apply_url?: string | null;

  /**
   * Company logo URL
   */
  company_logo?: string | null;

  /**
   * Company size category
   */
  company_size?: string | null;

  /**
   * Department or team
   */
  department?: string | null;

  /**
   * Employment type (full-time, part-time, etc.)
   */
  employment_type?: string | null;

  /**
   * Whether user has saved this job
   */
  is_saved?: boolean;

  /**
   * Full job description
   */
  job_description_text?: string | null;

  /**
   * Job location
   */
  location?: string | null;

  /**
   * Location type (remote, hybrid, onsite)
   */
  location_type?: string | null;

  /**
   * Organization type
   */
  organization_type?: string | null;

  /**
   * Salary currency code
   */
  salary_currency?: string;

  /**
   * Salary interval (yearly, hourly, etc.)
   */
  salary_interval?: string | null;

  /**
   * Maximum salary
   */
  salary_max?: number | null;

  /**
   * Minimum salary
   */
  salary_min?: number | null;
}

/**
 * Paginated list of job postings.
 */
export interface FetchListResponse {
  /**
   * Whether more pages are available
   */
  has_more: boolean;

  /**
   * List of job postings
   */
  items: Array<JobPosting>;

  /**
   * Current page number
   */
  page: number;

  /**
   * Number of items per page
   */
  page_size: number;

  /**
   * Total number of jobs matching filters
   */
  total: number;
}

export interface FetchListParams {
  /**
   * Filter by company size: startup, small, medium, large, enterprise
   */
  company_size?: string | null;

  /**
   * Filter by department
   */
  department?: string | null;

  /**
   * Filter by employment type: full-time, part-time, contract, internship
   */
  employment_type?: string | null;

  /**
   * Filter by location type: remote, hybrid, onsite
   */
  location_type?: string | null;

  /**
   * Filter by organization type: startup, scaleup, established, non-profit,
   * government
   */
  organization_type?: string | null;

  /**
   * Page number (1-indexed)
   */
  page?: number;

  /**
   * Items per page (max 50)
   */
  page_size?: number;

  /**
   * Maximum salary filter
   */
  salary_max?: number | null;

  /**
   * Minimum salary filter
   */
  salary_min?: number | null;

  /**
   * Full-text search on title and description
   */
  search?: string | null;

  /**
   * Sort order
   */
  sort_by?: 'newest' | 'salary_high' | 'salary_low';
}

export declare namespace Fetch {
  export {
    type JobPosting as JobPosting,
    type FetchListResponse as FetchListResponse,
    type FetchListParams as FetchListParams,
  };
}
