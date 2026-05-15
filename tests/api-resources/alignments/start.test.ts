// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource start', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.alignments.start.create({
      analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.alignments.start.create({
      analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    });
  });

  // Mock server tests are disabled
  test.skip('createWithStreaming: only required params', async () => {
    const responsePromise = client.alignments.start.createWithStreaming({
      analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
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
  test.skip('createWithStreaming: required and optional params', async () => {
    const response = await client.alignments.start.createWithStreaming({
      analysis_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    });
  });
});
