// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource topics', () => {
  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.learningPaths.topics.complete('topic_id', { path_id: 'path_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('complete: required and optional params', async () => {
    const response = await client.learningPaths.topics.complete('topic_id', { path_id: 'path_id' });
  });

  // Mock server tests are disabled
  test.skip('uncomplete: only required params', async () => {
    const responsePromise = client.learningPaths.topics.uncomplete('topic_id', { path_id: 'path_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('uncomplete: required and optional params', async () => {
    const response = await client.learningPaths.topics.uncomplete('topic_id', { path_id: 'path_id' });
  });
});
