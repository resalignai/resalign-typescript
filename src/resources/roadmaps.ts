// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Roadmaps extends APIResource {
  /**
   * Retrieve all completed roadmaps for the authenticated user, sorted by newest
   * first.
   *
   * @example
   * ```ts
   * const roadmaps = await client.roadmaps.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/roadmaps/fetch', options);
  }

  /**
   * Generate a personalized career roadmap from a completed analysis. Produces
   * stage-by-stage guidance on skill acquisition, resume optimization, interview
   * prep, and application strategy.
   *
   * @example
   * ```ts
   * const response = await client.roadmaps.generate({
   *   analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   * });
   * ```
   */
  generate(body: RoadmapGenerateParams, options?: RequestOptions): APIPromise<RoadmapGenerateResponse> {
    return this._client.post('/v1/roadmaps/generate', { body, ...options });
  }
}

export type RoadmapListResponse = unknown;

/**
 * Response after generating a career roadmap.
 */
export interface RoadmapGenerateResponse {
  /**
   * The source analysis ID
   */
  analysis_id: string;

  /**
   * The complete roadmap
   */
  roadmap: RoadmapGenerateResponse.Roadmap;

  /**
   * The generated roadmap ID
   */
  roadmap_id: string;
}

export namespace RoadmapGenerateResponse {
  /**
   * The complete roadmap
   */
  export interface Roadmap {
    /**
     * ATS keywords from JD
     */
    ats_keywords: Roadmap.ATSKeywords;

    /**
     * Prioritized skill gaps (max 7)
     */
    gap_analysis: Array<Roadmap.GapAnalysis>;

    /**
     * High-level roadmap overview
     */
    roadmap_summary: Roadmap.RoadmapSummary;

    /**
     * Exactly 10 stages
     */
    stages: Array<Roadmap.Stage>;
  }

  export namespace Roadmap {
    /**
     * ATS keywords from JD
     */
    export interface ATSKeywords {
      /**
       * Terms from requirements (high ATS weight)
       */
      must_include: Array<string>;

      /**
       * Terms from role description
       */
      nice_to_include: Array<string>;

      /**
       * Terms from preferred qualifications
       */
      should_include: Array<string>;
    }

    /**
     * A prioritized skill gap for the roadmap.
     */
    export interface GapAnalysis {
      /**
       * One of: technical_craft, domain_business, behavioral, adaptive_meta
       */
      category: string;

      /**
       * What the candidate currently has
       */
      current_evidence: string;

      /**
       * Realistic hours to close gap
       */
      estimated_learning_hours: number;

      /**
       * Human-readable description of what's missing
       */
      gap_description: string;

      /**
       * unmatched or partial
       */
      match_level: 'unmatched' | 'partial';

      /**
       * CRITICAL, IMPORTANT, or NICE_TO_HAVE
       */
      priority: 'CRITICAL' | 'IMPORTANT' | 'NICE_TO_HAVE';

      /**
       * What the JD demands for this skill
       */
      required_level: string;

      /**
       * Estimated score improvement (1-20 points)
       */
      score_impact_estimate: number;

      /**
       * The specific skill or competency
       */
      skill: string;
    }

    /**
     * High-level roadmap overview
     */
    export interface RoadmapSummary {
      /**
       * STRONG_FIT, GOOD_FIT, LOW_FIT, or NOT_FIT
       */
      classification: string;

      /**
       * Stage IDs on the critical path
       */
      critical_path: Array<string>;

      /**
       * Current fit score
       */
      current_score: number;

      /**
       * Human-readable timeline range (e.g., '6-10 weeks')
       */
      estimated_timeline_weeks: string;

      /**
       * 2-3 paragraph personalized summary of the roadmap
       */
      executive_summary: string;

      /**
       * Whether knockout gate fired
       */
      knockout_applied: boolean;

      /**
       * CRITICAL skills that triggered knockout (empty if none)
       */
      knockout_skills: Array<string>;

      /**
       * Points needed to reach target
       */
      score_gap: number;

      /**
       * Target score (default 85.0)
       */
      target_score: number;

      /**
       * High end of total effort
       */
      total_estimated_hours_high: number;

      /**
       * Low end of total effort
       */
      total_estimated_hours_low: number;

      /**
       * Number of stages included
       */
      total_included_stages: number;
    }

    /**
     * A stage in the career roadmap.
     */
    export interface Stage {
      /**
       * Whether this stage is included in the roadmap
       */
      included: boolean;

      /**
       * 1-2 sentences explaining why included/skipped
       */
      inclusion_rationale: string;

      /**
       * Stage identifier
       */
      stage_id: string;

      /**
       * Stage number (1-10)
       */
      stage_number: number;

      /**
       * Human-readable stage title
       */
      title: string;

      /**
       * 3-7 specific actions to take
       */
      actionable_steps?: Array<string> | null;

      /**
       * Effort estimate
       */
      estimated_effort?: Stage.EstimatedEffort | null;

      /**
       * light, moderate, comprehensive
       */
      intensity?: 'light' | 'moderate' | 'comprehensive' | null;

      /**
       * 2-5 specific objectives
       */
      objectives?: Array<string> | null;

      /**
       * Stage IDs that can run concurrently
       */
      parallel_with?: Array<string> | null;

      /**
       * Stage IDs that must come first
       */
      prerequisites?: Array<string> | null;

      /**
       * CRITICAL, HIGH, MEDIUM, LOW
       */
      priority?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | null;

      /**
       * Types/topics of resources to seek
       */
      resources_hint?: Array<string> | null;

      /**
       * Skills from gap_analysis addressed here
       */
      skills_addressed?: Array<string> | null;

      /**
       * 2-5 concrete, self-assessable criteria
       */
      success_criteria?: Array<string> | null;
    }

    export namespace Stage {
      /**
       * Effort estimate
       */
      export interface EstimatedEffort {
        /**
         * Expected daily time (e.g., '1-2 hours/day')
         */
        daily_commitment: string;

        /**
         * High end estimate
         */
        hours_high: number;

        /**
         * Low end estimate
         */
        hours_low: number;

        /**
         * Timeline range (e.g., '2-3')
         */
        weeks: string;
      }
    }
  }
}

export interface RoadmapGenerateParams {
  /**
   * The analysis ID (contains fit assessment and JD)
   */
  analysis_id: string;
}

export declare namespace Roadmaps {
  export {
    type RoadmapListResponse as RoadmapListResponse,
    type RoadmapGenerateResponse as RoadmapGenerateResponse,
    type RoadmapGenerateParams as RoadmapGenerateParams,
  };
}
