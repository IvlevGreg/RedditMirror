import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { userRequest } from '../userReducer';
import { SET_TOKEN } from './tokenReducer';

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token,
  };
}

type ActionThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const tokenRequestAsync = (): ActionThunk => (dispatch, getState) => {
  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');

  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID || '',
          password: 'C3rpbWzgVH0KvbFRa2Mjo2VnQiGk4g',
        },
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(({ data }) => {
      dispatch(setToken(data['access_token']));
    })
    .catch(console.log);
};
