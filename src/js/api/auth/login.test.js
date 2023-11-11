import 'jest-localstorage-mock';
require('jest-fetch-mock').enableMocks();
require('jest-fetch-mock').enableMocks();
import { login } from './login';

describe('login', () => {
  it('fetches and stores a token in browser storage', async () => {
    await login('TEST_EMAIL', 'TEST_PASSWORD');
    const token = JSON.parse(localStorage.getItem('token'));
    expect(token).not.toBeNull();
  });
});
