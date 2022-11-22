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
  if (!code) return;
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${code}&redirect_uri=https://react-app-reddit-mirror.herokuapp.com/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID || '',
          password: 'BHFXHxRjJg7MEGvN0DlDH83_AeSYUg',
        },
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then(({ data }) => {
      console.log(code);
      if (!data['access_token']) return;
      dispatch(setToken(data['access_token']));
    })
    .catch((err) => {
      console.log(code);

      console.log(err);
    });
};
