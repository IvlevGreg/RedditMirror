import { SET_TOKEN } from './tokenReducer';

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token,
  };
}
