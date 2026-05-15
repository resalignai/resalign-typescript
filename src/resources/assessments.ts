// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Assessments extends APIResource {
  /**
   * Run auto-assessment for a single (user_id, job_id) pair.
   *
   * Called by Cloud Tasks after batch refresh. Service-key protected. Does NOT count
   * against user's on-demand assessment quota.
   */
  autoAssess(
    params: AssessmentAutoAssessParams,
    options?: RequestOptions,
  ): APIPromise<AssessmentAutoAssessResponse> {
    const { 'X-Service-Key': xServiceKey, ...body } = params;
    return this._client.post('/v1/assessments/auto-assess', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xServiceKey != null ? { 'X-Service-Key': xServiceKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface AssessmentAutoAssessResponse {
  status: string;

  analysis_id?: string | null;

  fit_score?: number | null;

  reason?: string | null;
}

export interface AssessmentAutoAssessParams {
  /**
   * Body param
   */
  job_id: string;

  /**
   * Body param
   */
  tier: string;

  /**
   * Body param
   */
  user_id: string;

  /**
   * Body param
   */
  trigger?: string;

  /**
   * Header param
   */
  'X-Service-Key'?: string;
}

export declare namespace Assessments {
  export {
    type AssessmentAutoAssessResponse as AssessmentAutoAssessResponse,
    type AssessmentAutoAssessParams as AssessmentAutoAssessParams,
  };
}
