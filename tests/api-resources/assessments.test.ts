// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assessments', () => {
  // Mock server tests are disabled
  test.skip('autoAssess: only required params', async () => {
    const responsePromise = client.assessments.autoAssess({
      job_id: 'job_id',
      tier: 'tier',
      user_id: 'user_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('autoAssess: required and optional params', async () => {
    const response = await client.assessments.autoAssess({
      job_id: 'job_id',
      tier: 'tier',
      user_id: 'user_id',
      trigger: 'trigger',
      'X-Service-Key': 'X-Service-Key',
    });
  });
});
