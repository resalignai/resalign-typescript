// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FetchAPI from './fetch';
import { Fetch, FetchListParams, FetchListResponse, JobPosting } from './fetch';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class JobsBoard extends APIResource {
  fetch: FetchAPI.Fetch = new FetchAPI.Fetch(this._client);

  /**
   * Trigger asynchronous synchronization of job postings from all ATS sources. This
   * endpoint returns 202 Accepted immediately and processes sync in background.
   * Protected endpoint requiring valid service key. Returns report_id for tracking
   * the sync operation.
   *
   * @example
   * ```ts
   * const response = await client.jobsBoard.refresh();
   * ```
   */
  refresh(
    params: JobsBoardRefreshParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobsBoardRefreshResponse> {
    const { 'X-Service-Key': xServiceKey } = params ?? {};
    return this._client.post('/v1/jobs_board/refresh_jobs', {
      ...options,
      headers: buildHeaders([
        { ...(xServiceKey != null ? { 'X-Service-Key': xServiceKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Response model for job refresh endpoint.
 */
export interface JobsBoardRefreshResponse {
  /**
   * Human-readable status message
   */
  message: string;

  /**
   * Unique report ID for tracking
   */
  report_id: string;

  /**
   * Processing status
   */
  status: string;
}

export interface JobsBoardRefreshParams {
  'X-Service-Key'?: string;
}

JobsBoard.Fetch = Fetch;

export declare namespace JobsBoard {
  export {
    type JobsBoardRefreshResponse as JobsBoardRefreshResponse,
    type JobsBoardRefreshParams as JobsBoardRefreshParams,
  };

  export {
    Fetch as Fetch,
    type JobPosting as JobPosting,
    type FetchListResponse as FetchListResponse,
    type FetchListParams as FetchListParams,
  };
}
