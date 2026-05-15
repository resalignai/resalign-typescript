// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Preferences extends APIResource {
  /**
   * Fetch notification preferences for the authenticated user.
   *
   * Returns all event types with their email_enabled state. Missing rows default to
   * email_enabled=True (opt-in).
   */
  retrieve(options?: RequestOptions): APIPromise<PreferenceRetrieveResponse> {
    return this._client.get('/v1/notifications/preferences', options);
  }

  /**
   * Update a single notification preference toggle.
   *
   * Upserts the preference row for the given event_type.
   */
  update(body: PreferenceUpdateParams, options?: RequestOptions): APIPromise<PreferenceUpdateResponse> {
    return this._client.put('/v1/notifications/preferences', { body, ...options });
  }
}

export interface PreferenceRetrieveResponse {
  preferences: Array<PreferenceRetrieveResponse.Preference>;
}

export namespace PreferenceRetrieveResponse {
  export interface Preference {
    email_enabled: boolean;

    event_type: string;
  }
}

export interface PreferenceUpdateResponse {
  email_enabled: boolean;

  event_type: string;

  updated: boolean;
}

export interface PreferenceUpdateParams {
  email_enabled: boolean;

  event_type: string;
}

export declare namespace Preferences {
  export {
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
