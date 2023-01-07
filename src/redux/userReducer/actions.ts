import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { IUserData } from '../../hooks/useUserData';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export type UserRequestAction = {
  type: typeof USER_REQUEST;
};

export const userRequest: ActionCreator<UserRequestAction> = () => ({
  type: USER_REQUEST,
});

export type UserRequestSuccessAction = {
  type: typeof USER_REQUEST_SUCCESS;
  data: IUserData;
};

export const userRequestSuccess: ActionCreator<UserRequestSuccessAction> = (
  data: IUserData
) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});

export type UserRequestErrorAction = {
  type: typeof USER_REQUEST_ERROR;
  error: Error;
};

export const userRequestError: ActionCreator<UserRequestErrorAction> = (
  error: Error
) => ({
  type: USER_REQUEST_ERROR,
  error,
});

type ActionThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const userRequestAsync = (): ActionThunk => (dispatch, getState) => {
  dispatch(userRequest());
  axios
    .get('https://oauth.reddit.com/api/v1/me.json', {
      headers: {
        Authorization: `Bearer ${getState().tokenReducer.token}`,
      },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(
        userRequestSuccess({
          name: userData.name,
          iconImg: userData.snoovatar_img || userData.icon_img,
        })
      );
    })
    .catch((err) => {
      console.log('error', err);
      dispatch(userRequestError(err));
    });
};
