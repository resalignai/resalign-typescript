// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PreferencesAPI from './preferences';
import {
  PreferenceRetrieveResponse,
  PreferenceUpdateParams,
  PreferenceUpdateResponse,
  Preferences,
} from './preferences';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Notifications extends APIResource {
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);

  /**
   * Process pending notification events and send emails.
   *
   * Called by Cloud Scheduler daily at 10:00 UTC. Idempotent: DB-level claiming with
   * batch_id prevents double-send on concurrent runs.
   */
  deliver(
    params: NotificationDeliverParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationDeliverResponse> {
    const { 'X-Service-Key': xServiceKey } = params ?? {};
    return this._client.post('/v1/notifications/deliver', {
      ...options,
      headers: buildHeaders([
        { ...(xServiceKey != null ? { 'X-Service-Key': xServiceKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface NotificationDeliverResponse {
  status: string;

  claimed?: number;

  failed?: number;

  sent?: number;

  skipped_disabled?: number;

  skipped_frequency?: number;

  skipped_preference?: number;
}

export interface NotificationDeliverParams {
  'X-Service-Key'?: string;
}

Notifications.Preferences = Preferences;

export declare namespace Notifications {
  export {
    type NotificationDeliverResponse as NotificationDeliverResponse,
    type NotificationDeliverParams as NotificationDeliverParams,
  };

  export {
    Preferences as Preferences,
    type PreferenceRetrieveResponse as PreferenceRetrieveResponse,
    type PreferenceUpdateResponse as PreferenceUpdateResponse,
    type PreferenceUpdateParams as PreferenceUpdateParams,
  };
}
