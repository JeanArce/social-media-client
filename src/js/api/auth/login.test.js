// import 'jest-localstorage-mock';
// const fetchMock = require('jest-fetch-mock');
// fetchMock.enableMocks();
// fetchMock.dontMock();

//import localStorageMock from './localStorage';
import { login } from './login';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: '12345' }),
    statusText: 'OK',
  }),
);

const mockStorage = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(global, 'localStorage', { value: mockStorage });

describe('login', () => {
  it('fetches and stores a token in browser storage', async () => {
    await login('TEST_EMAIL', 'TEST_PASSWORD');
    const token = JSON.parse(localStorage.getItem('token'));
    expect(token).not.toBeNull();
  });
});
