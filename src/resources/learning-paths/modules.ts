// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Modules extends APIResource {
  /**
   * Get detailed module information with topics.
   *
   * Returns: Module with all topics and their completion status
   */
  retrieve(moduleID: string, params: ModuleRetrieveParams, options?: RequestOptions): APIPromise<unknown> {
    const { path_id } = params;
    return this._client.get(path`/v1/learning-paths/${path_id}/modules/${moduleID}`, options);
  }

  /**
   * Get or generate content for a specific topic in a module.
   *
   * If content hasn't been generated yet and generate=True, it will be generated
   * on-demand.
   *
   * Args: path_id: Learning path ID module_id: Module ID topic_index: Index of the
   * topic (0-based) generate: If True, generate content if not already generated
   *
   * Returns: Topic content (text, examples, key takeaways)
   */
  getContent(
    moduleID: string,
    params: ModuleGetContentParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { path_id, ...query } = params;
    return this._client.get(path`/v1/learning-paths/${path_id}/modules/${moduleID}/content`, {
      query,
      ...options,
    });
  }

  /**
   * Get curated external resources for a module.
   *
   * If resources haven't been curated yet and curate=True, curates them on-demand.
   *
   * Args: path_id: Learning path ID module_id: Module ID curate: If True, curate
   * resources if not already done
   *
   * Returns: List of curated resources (Coursera, YouTube, etc.)
   */
  getResources(
    moduleID: string,
    params: ModuleGetResourcesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { path_id, ...query } = params;
    return this._client.get(path`/v1/learning-paths/${path_id}/modules/${moduleID}/resources`, {
      query,
      ...options,
    });
  }
}

export type ModuleRetrieveResponse = unknown;

export type ModuleGetContentResponse = unknown;

export type ModuleGetResourcesResponse = unknown;

export interface ModuleRetrieveParams {
  path_id: string;
}

export interface ModuleGetContentParams {
  /**
   * Path param
   */
  path_id: string;

  /**
   * Query param
   */
  generate?: boolean;

  /**
   * Query param
   */
  topic_index?: number;
}

export interface ModuleGetResourcesParams {
  /**
   * Path param
   */
  path_id: string;

  /**
   * Query param
   */
  curate?: boolean;
}

export declare namespace Modules {
  export {
    type ModuleRetrieveResponse as ModuleRetrieveResponse,
    type ModuleGetContentResponse as ModuleGetContentResponse,
    type ModuleGetResourcesResponse as ModuleGetResourcesResponse,
    type ModuleRetrieveParams as ModuleRetrieveParams,
    type ModuleGetContentParams as ModuleGetContentParams,
    type ModuleGetResourcesParams as ModuleGetResourcesParams,
  };
}
