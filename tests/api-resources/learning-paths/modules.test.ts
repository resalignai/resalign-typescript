// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modules', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.learningPaths.modules.retrieve('module_id', { path_id: 'path_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.learningPaths.modules.retrieve('module_id', { path_id: 'path_id' });
  });

  // Mock server tests are disabled
  test.skip('getContent: only required params', async () => {
    const responsePromise = client.learningPaths.modules.getContent('module_id', { path_id: 'path_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getContent: required and optional params', async () => {
    const response = await client.learningPaths.modules.getContent('module_id', {
      path_id: 'path_id',
      generate: true,
      topic_index: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getResources: only required params', async () => {
    const responsePromise = client.learningPaths.modules.getResources('module_id', { path_id: 'path_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getResources: required and optional params', async () => {
    const response = await client.learningPaths.modules.getResources('module_id', {
      path_id: 'path_id',
      curate: true,
    });
  });
});
