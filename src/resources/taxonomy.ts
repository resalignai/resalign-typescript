// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Taxonomy extends APIResource {
  /**
   * Return all top-level job function keys with display labels.
   */
  listFunctions(options?: RequestOptions): APIPromise<TaxonomyListFunctionsResponse> {
    return this._client.get('/v1/taxonomy/functions', options);
  }

  /**
   * Return canonical role names for a given job function key.
   */
  listRoles(query: TaxonomyListRolesParams, options?: RequestOptions): APIPromise<TaxonomyListRolesResponse> {
    return this._client.get('/v1/taxonomy/roles', { query, ...options });
  }

  /**
   * Return skills matching the search query. Returns all skills when q is empty.
   */
  searchSkills(
    query: TaxonomySearchSkillsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaxonomySearchSkillsResponse> {
    return this._client.get('/v1/taxonomy/skills', { query, ...options });
  }
}

export interface TaxonomyListFunctionsResponse {
  functions: Array<TaxonomyListFunctionsResponse.Function>;
}

export namespace TaxonomyListFunctionsResponse {
  export interface Function {
    key: string;

    label: string;
  }
}

export interface TaxonomyListRolesResponse {
  function_key: string;

  roles: Array<string>;
}

export interface TaxonomySearchSkillsResponse {
  query: string;

  skills: Array<string>;
}

export interface TaxonomyListRolesParams {
  /**
   * Job function key, e.g. software_engineering
   */
  function: string;
}

export interface TaxonomySearchSkillsParams {
  /**
   * Max results
   */
  limit?: number;

  /**
   * Partial skill name to search for
   */
  q?: string;
}

export declare namespace Taxonomy {
  export {
    type TaxonomyListFunctionsResponse as TaxonomyListFunctionsResponse,
    type TaxonomyListRolesResponse as TaxonomyListRolesResponse,
    type TaxonomySearchSkillsResponse as TaxonomySearchSkillsResponse,
    type TaxonomyListRolesParams as TaxonomyListRolesParams,
    type TaxonomySearchSkillsParams as TaxonomySearchSkillsParams,
  };
}
