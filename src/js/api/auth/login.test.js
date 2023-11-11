import 'jest-localstorage-mock';
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();
fetchMock.dontMock();
import { login } from './login';

describe('login', () => {
  it('fetches and stores a token in browser storage', async () => {
    await login('TEST_EMAIL', 'TEST_PASSWORD');
    const token = JSON.parse(localStorage.getItem('token'));
    expect(token).not.toBeNull();
  });
});
