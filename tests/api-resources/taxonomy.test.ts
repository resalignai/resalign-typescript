// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource taxonomy', () => {
  // Mock server tests are disabled
  test.skip('listFunctions', async () => {
    const responsePromise = client.taxonomy.listFunctions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRoles: only required params', async () => {
    const responsePromise = client.taxonomy.listRoles({ function: 'function' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRoles: required and optional params', async () => {
    const response = await client.taxonomy.listRoles({ function: 'function' });
  });

  // Mock server tests are disabled
  test.skip('searchSkills', async () => {
    const responsePromise = client.taxonomy.searchSkills();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchSkills: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.taxonomy.searchSkills({ limit: 1, q: 'q' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Resalign.NotFoundError);
  });
});
