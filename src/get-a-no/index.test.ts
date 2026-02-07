/// <reference types="jest" />
import { getANo } from './index.js';

/* mock console.error to keep test output clean */
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('getANo', () => {
  /* #1 */
  it('returns api-ok and payload when fetch resolves with ok=true', async () => {
    const mockReason = 'No, you cannot!';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ reason: mockReason }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getANo();
    expect(res.code).toBe('api-ok');
  });

  /* #2 */
  it('returns api-fail when response.ok is false', async () => {
    (global as any).fetch = jest.fn().mockResolvedValue({ ok: false });

    const res = await getANo();
    expect(res.code).toBe('api-fail');
  });

  /* #3 */
  it('returns api-fail when fetch throws', async () => {
    (global as any).fetch = jest.fn().mockRejectedValue(new Error('network'));

    const res = await getANo();
    expect(res.code).toBe('api-fail');
  });

  /* #4 */
  it('returns api-fail when json parsing fails', async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockRejectedValue(new Error('invalid json')),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getANo();
    expect(res.code).toBe('api-fail');
  });

  /* #5 */
  it('returns object payload with reason on success (payload test)', async () => {
    const mockReason = 'Rejection reason payload check';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({ reason: mockReason }),
    };
    (global as any).fetch = jest.fn().mockResolvedValue(mockResponse);

    const res = await getANo();
    expect(res.payload).not.toBeNull();
    expect(res.payload?.reason).toBe(mockReason);
  });

  /* #6 */
  it('returns null payload on fetch error (payload null test)', async () => {
    (global as any).fetch = jest.fn().mockRejectedValue(new Error('network'));

    const res = await getANo();
    expect(res.payload).toBeNull();
    expect(res.code).toBe('api-fail');
  });
});
