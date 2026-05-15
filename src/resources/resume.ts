// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Resume extends APIResource {
  /**
   * Retrieve all resumes uploaded by the authenticated user, ordered by most recent.
   *
   * @example
   * ```ts
   * const resumes = await client.resume.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ResumeListResponse> {
    return this._client.get('/v1/resume/list', options);
  }

  /**
   * Delete a resume file from storage and database. Removes both the stored file and
   * its metadata.
   *
   * @example
   * ```ts
   * const resume = await client.resume.delete('resume_id');
   * ```
   */
  delete(resumeID: string, options?: RequestOptions): APIPromise<ResumeDeleteResponse> {
    return this._client.delete(path`/v1/resume/delete/${resumeID}`, options);
  }

  /**
   * Securely download the resume file content from Supabase Storage.
   *
   * @example
   * ```ts
   * const response = await client.resume.download('resume_id');
   * ```
   */
  download(resumeID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/resume/download/${resumeID}`, options);
  }

  /**
   * Manually trigger re-extraction for a resume that failed or is missing extracted
   * data.
   *
   * @example
   * ```ts
   * const response = await client.resume.retryExtraction(
   *   'resume_id',
   * );
   * ```
   */
  retryExtraction(resumeID: string, options?: RequestOptions): APIPromise<ResumeRetryExtractionResponse> {
    return this._client.post(path`/v1/resume/retry-extraction/${resumeID}`, options);
  }

  /**
   * Upload a resume to Supabase Storage with content-based deduplication. Supports
   * PDF, DOCX, DOC, MD, MDX, and TXT formats. Extraction happens asynchronously in
   * the background.
   *
   * @example
   * ```ts
   * const response = await client.resume.upload({
   *   resume: 'resume',
   * });
   * ```
   */
  upload(body: ResumeUploadParams, options?: RequestOptions): APIPromise<ResumeUploadResponse> {
    return this._client.post(
      '/v1/resume/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Response containing list of user's resumes.
 */
export interface ResumeListResponse {
  /**
   * List of uploaded resumes
   */
  resumes: Array<ResumeListResponse.Resume>;
}

export namespace ResumeListResponse {
  /**
   * Individual resume item in the list.
   */
  export interface Resume {
    /**
     * Resume file ID
     */
    id: string;

    /**
     * Upload timestamp
     */
    createdAt: string;

    /**
     * Original filename
     */
    name: string;

    /**
     * File size in bytes (0 if not stored)
     */
    size: number;

    /**
     * File extension (pdf, docx, etc.)
     */
    type: string;

    /**
     * Last update timestamp
     */
    updatedAt: string;

    /**
     * Download URL for the resume
     */
    url: string;

    /**
     * Extracted resume data (null if pending)
     */
    json_data?: { [key: string]: unknown } | null;
  }
}

/**
 * Response after successfully deleting a resume.
 */
export interface ResumeDeleteResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * ID of the deleted resume
   */
  resume_id: string;
}

export type ResumeDownloadResponse = unknown;

/**
 * Response after triggering resume extraction retry.
 */
export interface ResumeRetryExtractionResponse {
  /**
   * Status message
   */
  message: string;

  /**
   * Resume file ID
   */
  resume_id: string;

  /**
   * Extraction status (extraction_started or already_extracted)
   */
  status: string;
}

/**
 * Response after successfully uploading a resume.
 */
export interface ResumeUploadResponse {
  /**
   * Unique file ID
   */
  id: string;

  /**
   * Original filename
   */
  name: string;

  /**
   * File size in bytes
   */
  size: number;

  /**
   * File extension
   */
  type: string;

  /**
   * Download URL for the resume
   */
  url: string;

  /**
   * Creation timestamp
   */
  createdAt?: string | null;

  /**
   * Extracted data (null initially, populated asynchronously)
   */
  json_data?: null;

  /**
   * Last update timestamp
   */
  updatedAt?: string | null;
}

export interface ResumeUploadParams {
  /**
   * Resume file to upload
   */
  resume: string;
}

export declare namespace Resume {
  export {
    type ResumeListResponse as ResumeListResponse,
    type ResumeDeleteResponse as ResumeDeleteResponse,
    type ResumeDownloadResponse as ResumeDownloadResponse,
    type ResumeRetryExtractionResponse as ResumeRetryExtractionResponse,
    type ResumeUploadResponse as ResumeUploadResponse,
    type ResumeUploadParams as ResumeUploadParams,
  };
}
