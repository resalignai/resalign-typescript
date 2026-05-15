// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Start extends APIResource {
  /**
   * Create a new career alignment from a completed analysis. Generates a
   * personalized skill-gap roadmap and triggers background resource curation.
   *
   * @example
   * ```ts
   * const start = await client.alignments.start.create({
   *   analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   * });
   * ```
   */
  create(body: StartCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/alignments/start', { body, ...options });
  }

  /**
   * Create a new alignment and generate a roadmap with real-time progress via SSE.
   * Streams progress events: creating_record, generating_roadmap, roadmap_complete,
   * done.
   *
   * @example
   * ```ts
   * const response =
   *   await client.alignments.start.createWithStreaming({
   *     analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   });
   * ```
   */
  createWithStreaming(body: StartCreateWithStreamingParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/alignments/start/stream', { body, ...options });
  }
}

/**
 * Request body for starting a new alignment.
 */
export interface StartAlignment {
  /**
   * ID of a completed analysis to build roadmap from
   */
  analysis_id: string;
}

export type StartCreateResponse = unknown;

export type StartCreateWithStreamingResponse = unknown;

export interface StartCreateParams {
  /**
   * ID of a completed analysis to build roadmap from
   */
  analysis_id: string;
}

export interface StartCreateWithStreamingParams {
  /**
   * ID of a completed analysis to build roadmap from
   */
  analysis_id: string;
}

export declare namespace Start {
  export {
    type StartAlignment as StartAlignment,
    type StartCreateResponse as StartCreateResponse,
    type StartCreateWithStreamingResponse as StartCreateWithStreamingResponse,
    type StartCreateParams as StartCreateParams,
    type StartCreateWithStreamingParams as StartCreateWithStreamingParams,
  };
}
