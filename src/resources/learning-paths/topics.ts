// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Topics extends APIResource {
  /**
   * Mark a topic as complete and update progress.
   *
   * Returns: Updated progress information
   */
  complete(topicID: string, params: TopicCompleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { path_id } = params;
    return this._client.post(path`/v1/learning-paths/${path_id}/topics/${topicID}/complete`, options);
  }

  /**
   * Mark a topic as incomplete (toggle off).
   *
   * Returns: Updated progress information
   */
  uncomplete(topicID: string, params: TopicUncompleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { path_id } = params;
    return this._client.post(path`/v1/learning-paths/${path_id}/topics/${topicID}/uncomplete`, options);
  }
}

export type TopicCompleteResponse = unknown;

export type TopicUncompleteResponse = unknown;

export interface TopicCompleteParams {
  path_id: string;
}

export interface TopicUncompleteParams {
  path_id: string;
}

export declare namespace Topics {
  export {
    type TopicCompleteResponse as TopicCompleteResponse,
    type TopicUncompleteResponse as TopicUncompleteResponse,
    type TopicCompleteParams as TopicCompleteParams,
    type TopicUncompleteParams as TopicUncompleteParams,
  };
}
