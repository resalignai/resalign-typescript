// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Recommendations extends APIResource {
  /**
   * Get personalized job recommendations for the user, including active and
   * preserved matches.
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/recommendations', options);
  }

  /**
   * Recompute job recommendations based on current profile preferences. Requires
   * profile strength >= 35.
   */
  refresh(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/recommendations/refresh', options);
  }

  /**
   * Trigger batch recommendation refresh.
   *
   * Called by Cloud Scheduler or scraper webhook after job sync. Returns 202
   * immediately; work runs in background via FastAPI BackgroundTasks.
   */
  refreshBatch(
    params: RecommendationRefreshBatchParams,
    options?: RequestOptions,
  ): APIPromise<RecommendationRefreshBatchResponse> {
    const { 'X-Service-Key': xServiceKey, ...body } = params;
    return this._client.post('/v1/recommendations/refresh-batch', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xServiceKey != null ? { 'X-Service-Key': xServiceKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type RecommendationListResponse = unknown;

export type RecommendationRefreshResponse = unknown;

export interface RecommendationRefreshBatchResponse {
  message: string;

  status: string;
}

export interface RecommendationRefreshBatchParams {
  /**
   * Body param
   */
  report_id?: string | null;

  /**
   * Body param
   */
  tier?: 'free' | 'student' | 'pro' | 'all';

  /**
   * Body param
   */
  trigger?: string | null;

  /**
   * Header param
   */
  'X-Service-Key'?: string;
}

export declare namespace Recommendations {
  export {
    type RecommendationListResponse as RecommendationListResponse,
    type RecommendationRefreshResponse as RecommendationRefreshResponse,
    type RecommendationRefreshBatchResponse as RecommendationRefreshBatchResponse,
    type RecommendationRefreshBatchParams as RecommendationRefreshBatchParams,
  };
}
