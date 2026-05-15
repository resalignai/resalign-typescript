// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Profile extends APIResource {
  /**
   * Get current user's profile with onboarding status and career preferences.
   * Creates one if it doesn't exist.
   */
  retrieve(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/v1/profile', options);
  }

  /**
   * Mark onboarding as complete and trigger initial job recommendations computation.
   */
  completeOnboarding(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/profile/complete-onboarding', options);
  }

  /**
   * Reads structured data from the user's most recently extracted resume, normalises
   * skills and roles against the taxonomy, and writes them into
   * pending_extracted_skills / pending_extracted_roles for the user to review.
   */
  mergeResume(options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/profile/merge-resume', options);
  }

  /**
   * Save data for a specific onboarding step (1, 2, or 3). Validates fields and
   * updates profile strength.
   */
  saveOnboardingStep(
    step: number,
    body: ProfileSaveOnboardingStepParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.patch(path`/v1/profile/step/${step}`, { body, ...options });
  }

  /**
   * Merge new preferences into existing user profile. Recalculates profile strength.
   */
  updatePreferences(body: ProfileUpdatePreferencesParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch('/v1/profile', { body, ...options });
  }
}

export type ProfileRetrieveResponse = unknown;

export type ProfileCompleteOnboardingResponse = unknown;

export type ProfileMergeResumeResponse = unknown;

export type ProfileSaveOnboardingStepResponse = unknown;

export type ProfileUpdatePreferencesResponse = unknown;

export interface ProfileSaveOnboardingStepParams {
  /**
   * Step-specific preference fields
   */
  data: { [key: string]: unknown };
}

export interface ProfileUpdatePreferencesParams {
  /**
   * Preferences to merge into existing profile
   */
  preferences: { [key: string]: unknown };
}

export declare namespace Profile {
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileCompleteOnboardingResponse as ProfileCompleteOnboardingResponse,
    type ProfileMergeResumeResponse as ProfileMergeResumeResponse,
    type ProfileSaveOnboardingStepResponse as ProfileSaveOnboardingStepResponse,
    type ProfileUpdatePreferencesResponse as ProfileUpdatePreferencesResponse,
    type ProfileSaveOnboardingStepParams as ProfileSaveOnboardingStepParams,
    type ProfileUpdatePreferencesParams as ProfileUpdatePreferencesParams,
  };
}
