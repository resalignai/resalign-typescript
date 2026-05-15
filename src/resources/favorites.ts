// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Favorites extends APIResource {
  /**
   * Retrieve all job postings saved by the user, ordered by most recently saved.
   *
   * @example
   * ```ts
   * const favorites = await client.favorites.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FavoriteListResponse> {
    return this._client.get('/v1/favorites/list', options);
  }

  /**
   * Remove a job posting from the user's favorites list.
   *
   * @example
   * ```ts
   * const favorite = await client.favorites.delete(
   *   'job_posting_id',
   * );
   * ```
   */
  delete(jobPostingID: string, options?: RequestOptions): APIPromise<FavoriteDeleteResponse> {
    return this._client.delete(path`/v1/favorites/delete/${jobPostingID}`, options);
  }

  /**
   * Add a job posting to the user's favorites list for later reference. Validates
   * that the job exists and is active before saving.
   *
   * @example
   * ```ts
   * const response = await client.favorites.add(
   *   'job_posting_id',
   * );
   * ```
   */
  add(jobPostingID: string, options?: RequestOptions): APIPromise<FavoriteAddResponse> {
    return this._client.post(path`/v1/favorites/add/${jobPostingID}`, options);
  }
}

/**
 * Response containing list of saved jobs.
 */
export interface FavoriteListResponse {
  /**
   * List of saved job postings
   */
  items: Array<FavoriteListResponse.Item>;
}

export namespace FavoriteListResponse {
  /**
   * Individual saved job item in the favorites list.
   */
  export interface Item {
    /**
     * Job posting ID
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
     * Timestamp when job was saved
     */
    created_at: string;

    /**
     * Job title
     */
    job_title: string;

    /**
     * Application URL
     */
    apply_url?: string | null;

    /**
     * Company logo URL
     */
    company_logo?: string | null;

    /**
     * Department
     */
    department?: string | null;

    /**
     * Employment type
     */
    employment_type?: string | null;

    /**
     * First seen timestamp
     */
    first_seen_at?: string | null;

    /**
     * Whether the job is saved
     */
    is_saved?: boolean;

    /**
     * Job description
     */
    job_description_text?: string | null;

    /**
     * Job location
     */
    location?: string | null;

    /**
     * Location type
     */
    location_type?: string | null;

    /**
     * Salary currency
     */
    salary_currency?: string;

    /**
     * Salary interval
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
}

/**
 * Response after successfully removing a job from favorites.
 */
export interface FavoriteDeleteResponse {
  /**
   * ID of the removed job posting
   */
  job_posting_id: string;

  /**
   * Success message
   */
  message: string;
}

/**
 * Response after successfully saving a job to favorites.
 */
export interface FavoriteAddResponse {
  /**
   * ID of the saved job posting
   */
  job_posting_id: string;

  /**
   * Success message
   */
  message: string;
}

export declare namespace Favorites {
  export {
    type FavoriteListResponse as FavoriteListResponse,
    type FavoriteDeleteResponse as FavoriteDeleteResponse,
    type FavoriteAddResponse as FavoriteAddResponse,
  };
}
