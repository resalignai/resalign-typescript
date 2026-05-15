// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CompanyResearch extends APIResource {
  /**
   * Check the status of a company research profile.
   *
   * Returns the current status from the database. No external provider calls.
   */
  retrieve(identifier: string, options?: RequestOptions): APIPromise<CompanyResearchRetrieveResponse> {
    return this._client.get(path`/v1/company_research/retrieve/${identifier}`, options);
  }

  /**
   * Queue re-enrichment of stale and failed company profiles.
   *
   * Selects profiles where:
   *
   * - `research_status = 'completed'` AND `updated_at < now() - stale_days`, OR
   * - `research_status IN ('failed', 'cancelled')`
   *
   * Returns immediately (HTTP 202) and runs enrichment as a background task.
   */
  enrich(
    params: CompanyResearchEnrichParams,
    options?: RequestOptions,
  ): APIPromise<CompanyResearchEnrichResponse> {
    const { 'X-Service-Key': xServiceKey, ...body } = params;
    return this._client.post('/v1/company_research/enrich', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xServiceKey != null ? { 'X-Service-Key': xServiceKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Fetch the research output for a company profile.
   *
   * Accepts a company_profiles UUID as the identifier. Returns the persisted
   * research output from the database.
   */
  result(identifier: string, options?: RequestOptions): APIPromise<CompanyResearchResultResponse> {
    return this._client.get(path`/v1/company_research/result/${identifier}`, options);
  }

  /**
   * Run deep company research via E2B sandbox with Claude Code + Exa MCP.
   *
   * With stream=true: returns SSE event stream with real-time progress. With
   * stream=false (default): returns JSON response when complete.
   *
   * If the company has already been researched, returns the cached result.
   */
  run(params: CompanyResearchRunParams, options?: RequestOptions): APIPromise<unknown> {
    const { stream, ...body } = params;
    return this._client.post('/v1/company_research/run', { query: { stream }, body, ...options });
  }
}

/**
 * Status-only response for a company research profile.
 */
export interface CompanyResearchRetrieveResponse {
  /**
   * company_profiles row ID
   */
  company_profile_id: string;

  /**
   * Research status: in_progress, completed, failed
   */
  status: string;

  /**
   * Error message (present only when status is failed)
   */
  error?: string | null;
}

/**
 * Immediate 202 response confirming enrichment has been queued.
 */
export interface CompanyResearchEnrichResponse {
  /**
   * Number of companies queued for enrichment
   */
  companies_queued: number;

  /**
   * Status message
   */
  message: string;
}

/**
 * Response containing the research output.
 */
export interface CompanyResearchResultResponse {
  /**
   * Company name
   */
  company_name: string;

  /**
   * company_profiles row ID
   */
  company_profile_id: string;

  /**
   * Research status
   */
  status: string;

  /**
   * Research output (narrative + appendix)
   */
  output?: string | { [key: string]: unknown } | null;
}

export type CompanyResearchRunResponse = unknown;

export interface CompanyResearchEnrichParams {
  /**
   * Body param: Max concurrent Parallel research tasks
   */
  concurrency?: number;

  /**
   * Body param: Maximum number of companies to enrich in this run
   */
  limit?: number | null;

  /**
   * Body param: Re-enrich profiles whose updated_at is older than this many days
   */
  stale_days?: number;

  /**
   * Header param
   */
  'X-Service-Key'?: string;
}

export interface CompanyResearchRunParams {
  /**
   * Body param: Name of the company to research
   */
  company_name: string;

  /**
   * Query param: Return SSE stream instead of JSON
   */
  stream?: boolean;

  /**
   * Body param: UUID from companies_directory for idempotency
   */
  company_directory_id?: string | null;

  /**
   * Body param: Company LinkedIn page URL
   */
  linkedin_url?: string | null;

  /**
   * Body param: Company website URL
   */
  website_url?: string | null;
}

export declare namespace CompanyResearch {
  export {
    type CompanyResearchRetrieveResponse as CompanyResearchRetrieveResponse,
    type CompanyResearchEnrichResponse as CompanyResearchEnrichResponse,
    type CompanyResearchResultResponse as CompanyResearchResultResponse,
    type CompanyResearchRunResponse as CompanyResearchRunResponse,
    type CompanyResearchEnrichParams as CompanyResearchEnrichParams,
    type CompanyResearchRunParams as CompanyResearchRunParams,
  };
}
