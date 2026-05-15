// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Resalign } from '../client';

export abstract class APIResource {
  protected _client: Resalign;

  constructor(client: Resalign) {
    this._client = client;
  }
}
