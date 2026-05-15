// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StartAPI from './start';
import {
  Start,
  StartAlignment,
  StartCreateParams,
  StartCreateResponse,
  StartCreateWithStreamingParams,
  StartCreateWithStreamingResponse,
} from './start';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Alignments extends APIResource {
  start: StartAPI.Start = new StartAPI.Start(this._client);

  /**
   * Retrieve a specific alignment with its roadmap, linked analysis data, and job
   * details.
   *
   * @example
   * ```ts
   * const alignment = await client.alignments.retrieve(
   *   'alignment_id',
   * );
   * ```
   */
  retrieve(alignmentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/alignments/${alignmentID}`, options);
  }

  /**
   * List all career alignment roadmaps for the authenticated user with linked
   * analysis and job data.
   *
   * @example
   * ```ts
   * const alignments = await client.alignments.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/alignments', options);
  }

  /**
   * Poll the status and results of background learning resource curation for an
   * alignment.
   *
   * @example
   * ```ts
   * const response = await client.alignments.getResourcesStatus(
   *   'alignment_id',
   * );
   * ```
   */
  getResourcesStatus(alignmentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/alignments/${alignmentID}/resources`, options);
  }
}

export type AlignmentRetrieveResponse = unknown;

export type AlignmentListResponse = unknown;

export type AlignmentGetResourcesStatusResponse = unknown;

Alignments.Start = Start;

export declare namespace Alignments {
  export {
    type AlignmentRetrieveResponse as AlignmentRetrieveResponse,
    type AlignmentListResponse as AlignmentListResponse,
    type AlignmentGetResourcesStatusResponse as AlignmentGetResourcesStatusResponse,
  };

  export {
    Start as Start,
    type StartAlignment as StartAlignment,
    type StartCreateResponse as StartCreateResponse,
    type StartCreateWithStreamingResponse as StartCreateWithStreamingResponse,
    type StartCreateParams as StartCreateParams,
    type StartCreateWithStreamingParams as StartCreateWithStreamingParams,
  };
}
