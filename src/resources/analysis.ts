// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AnalysisAPI from './analysis';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Analysis extends APIResource {
  /**
   * Retrieve all completed analyses for the authenticated user, sorted by completion
   * date.
   *
   * @example
   * ```ts
   * const analyses = await client.analysis.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/analysis/fetch', options);
  }

  /**
   * Returns the current user's assessment usage and remaining quota for the billing
   * period.
   *
   * @example
   * ```ts
   * const response = await client.analysis.getQuota();
   * ```
   */
  getQuota(options?: RequestOptions): APIPromise<AnalysisGetQuotaResponse> {
    return this._client.get('/v1/analysis/quota', options);
  }

  /**
   * Analyze a resume against a job description to produce fit scoring, skill gap
   * analysis, and category-weighted assessments. Supports both synchronous JSON and
   * SSE streaming modes.
   *
   * @example
   * ```ts
   * const response = await client.analysis.run({
   *   jd_id: 'jd_id',
   *   resume_id: 'resume_id',
   * });
   * ```
   */
  run(params: AnalysisRunParams, options?: RequestOptions): APIPromise<AnalysisRunResponse> {
    const { stream, ...body } = params;
    return this._client.post('/v1/analysis/run', {
      query: { stream },
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface WeightFields {
  /**
   * Evidence for the weight
   */
  evidence: string;

  /**
   * Reasoning for the weight
   */
  reasoning: string;

  /**
   * Weight of the category (0-1)
   */
  weight: number;
}

export type AnalysisListResponse = unknown;

export type AnalysisGetQuotaResponse = { [key: string]: unknown };

/**
 * Response model for analyze endpoint.
 *
 * Contains the analysis results including fit score breakdown and LLM-generated
 * assessment, along with references to the source documents.
 */
export interface AnalysisRunResponse {
  /**
   * Unique ID for this analysis session
   */
  analysis_id: string;

  /**
   * LLM-generated fit assessment with strengths/weaknesses
   */
  fit_assessment: AnalysisRunResponse.FitAssessment;

  /**
   * Calculated fit score with category breakdowns
   */
  fit_score: AnalysisRunResponse.FitScore;

  /**
   * Job ID from jobs_board that was analyzed
   */
  jd_id: string;

  /**
   * Resume file_id that was analyzed
   */
  resume_id: string;
}

export namespace AnalysisRunResponse {
  /**
   * LLM-generated fit assessment with strengths/weaknesses
   */
  export interface FitAssessment {
    /**
     * Rationale for the fit assessment for the candidate
     */
    rationale: string;

    /**
     * Strengths of the candidate
     */
    strengths: Array<string>;

    /**
     * Summary of the fit assessment for the candidate
     */
    summary: string;

    /**
     * Weaknesses of the candidate
     */
    weaknesses: Array<string>;
  }

  /**
   * Calculated fit score with category breakdowns
   */
  export interface FitScore {
    /**
     * Detailed breakdown per category
     */
    category_breakdown: Array<FitScore.CategoryBreakdown>;

    /**
     * Category wise matching skills
     */
    category_matches: FitScore.CategoryMatches;

    /**
     * Category weights with reasoning and evidence
     */
    category_weights: FitScore.CategoryWeights;

    /**
     * Fit classification based on the overall score
     */
    classification: 'STRONG_FIT' | 'GOOD_FIT' | 'LOW_FIT' | 'NOT_FIT';

    /**
     * Overall fit score (0-100)
     */
    overall_score: number;
  }

  export namespace FitScore {
    /**
     * Detailed breakdown for a single category's score.
     */
    export interface CategoryBreakdown {
      /**
       * Category name
       */
      category: string;

      /**
       * Match ratio (matched/required, 0-1)
       */
      match_ratio: number;

      /**
       * Number of matched skills
       */
      matched_count: number;

      /**
       * Number of required skills
       */
      required_count: number;

      /**
       * Category weight (0-1)
       */
      weight: number;

      /**
       * Contribution to overall score
       */
      weighted_score: number;

      /**
       * List of matched skills
       */
      matched_skills?: Array<string>;
    }

    /**
     * Category wise matching skills
     */
    export interface CategoryMatches {
      /**
       * Matched adaptive/meta skills
       */
      adaptive_meta?: Array<string>;

      /**
       * Matched behavioral skills
       */
      behavioral?: Array<string>;

      /**
       * Matched domain/business skills
       */
      domain_business?: Array<string>;

      /**
       * Matched technical/craft skills
       */
      technical_craft?: Array<string>;
    }

    /**
     * Category weights with reasoning and evidence
     */
    export interface CategoryWeights {
      /**
       * Weight of the adaptive and meta category
       */
      adaptive_meta: AnalysisAPI.WeightFields;

      /**
       * Weight of the behavioral category
       */
      behavioral: AnalysisAPI.WeightFields;

      /**
       * Weight of the domain and business category
       */
      domain_business: AnalysisAPI.WeightFields;

      /**
       * Weight of the technical craft category
       */
      technical_craft: AnalysisAPI.WeightFields;
    }
  }
}

export interface AnalysisRunParams {
  /**
   * Body param: Job ID from jobs_board table
   */
  jd_id: string;

  /**
   * Body param: Resume file_id from resumes table
   */
  resume_id: string;

  /**
   * Query param: Return SSE stream instead of JSON
   */
  stream?: boolean;
}

export declare namespace Analysis {
  export {
    type WeightFields as WeightFields,
    type AnalysisListResponse as AnalysisListResponse,
    type AnalysisGetQuotaResponse as AnalysisGetQuotaResponse,
    type AnalysisRunResponse as AnalysisRunResponse,
    type AnalysisRunParams as AnalysisRunParams,
  };
}
