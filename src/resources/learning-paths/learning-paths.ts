// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModulesAPI from './modules';
import {
  ModuleGetContentParams,
  ModuleGetContentResponse,
  ModuleGetResourcesParams,
  ModuleGetResourcesResponse,
  ModuleRetrieveParams,
  ModuleRetrieveResponse,
  Modules,
} from './modules';
import * as TopicsAPI from './topics';
import {
  TopicCompleteParams,
  TopicCompleteResponse,
  TopicUncompleteParams,
  TopicUncompleteResponse,
  Topics,
} from './topics';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LearningPaths extends APIResource {
  modules: ModulesAPI.Modules = new ModulesAPI.Modules(this._client);
  topics: TopicsAPI.Topics = new TopicsAPI.Topics(this._client);

  /**
   * Get detailed information about a learning path including modules.
   *
   * Returns: Learning path with module summaries and progress
   */
  retrieve(pathID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/learning-paths/${pathID}`, options);
  }

  /**
   * Get all enrolled learning paths for the authenticated user.
   *
   * Returns: List of learning path summaries with job context
   */
  list(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/learning-paths', options);
  }

  /**
   * Enroll in a learning path from an alignment's roadmap.
   *
   * Creates:
   *
   * - Learning path record
   * - Module records for each module in the skill's learning path
   * - Topic records for each topic in each module
   *
   * Args: request: Contains alignment_id and skill name
   *
   * Returns: Created learning path with modules
   */
  enroll(body: LearningPathEnrollParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/learning-paths/enroll', { body, ...options });
  }
}

export type LearningPathRetrieveResponse = unknown;

export type LearningPathListResponse = unknown;

export type LearningPathEnrollResponse = unknown;

export interface LearningPathEnrollParams {
  /**
   * Alignment ID to enroll from
   */
  alignment_id: string;

  /**
   * Skill name to enroll in
   */
  skill: string;
}

LearningPaths.Modules = Modules;
LearningPaths.Topics = Topics;

export declare namespace LearningPaths {
  export {
    type LearningPathRetrieveResponse as LearningPathRetrieveResponse,
    type LearningPathListResponse as LearningPathListResponse,
    type LearningPathEnrollResponse as LearningPathEnrollResponse,
    type LearningPathEnrollParams as LearningPathEnrollParams,
  };

  export {
    Modules as Modules,
    type ModuleRetrieveResponse as ModuleRetrieveResponse,
    type ModuleGetContentResponse as ModuleGetContentResponse,
    type ModuleGetResourcesResponse as ModuleGetResourcesResponse,
    type ModuleRetrieveParams as ModuleRetrieveParams,
    type ModuleGetContentParams as ModuleGetContentParams,
    type ModuleGetResourcesParams as ModuleGetResourcesParams,
  };

  export {
    Topics as Topics,
    type TopicCompleteResponse as TopicCompleteResponse,
    type TopicUncompleteResponse as TopicUncompleteResponse,
    type TopicCompleteParams as TopicCompleteParams,
    type TopicUncompleteParams as TopicUncompleteParams,
  };
}
