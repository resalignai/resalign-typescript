// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Resalign from 'resalign';

const client = new Resalign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fetch', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.jobsBoard.fetch.retrieve('job_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.jobsBoard.fetch.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobsBoard.fetch.list(
        {
          company_size: 'company_size',
          department: 'department',
          employment_type: 'employment_type',
          location_type: 'location_type',
          organization_type: 'organization_type',
          page: 1,
          page_size: 1,
          salary_max: 0,
          salary_min: 0,
          search: 'search',
          sort_by: 'newest',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Resalign.NotFoundError);
  });
});
