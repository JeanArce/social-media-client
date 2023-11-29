import * as storage from '../../storage/index.js';
import { logout } from './logout';

jest.mock('../../storage/index.js', () => {
  return {
    remove: jest.fn(),
  };
});

describe('logout', () => {
  it('checks if it clears browser storage on logout', () => {
    logout();
    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.remove).toHaveBeenCalledWith('token');
  });
});
