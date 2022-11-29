import { Reducer } from 'redux';
import { IUserData } from '../../hooks/useUserData';
import {
  UserRequestAction,
  UserRequestErrorAction,
  UserRequestSuccessAction,
  USER_REQUEST,
  USER_REQUEST_ERROR,
  USER_REQUEST_SUCCESS,
} from './actions';

export type RootUserState = {
  loading: boolean;
  data: IUserData;
};

const intialState: RootUserState = {
  loading: false,
  data: {},
};

type UserAction =
  | UserRequestAction
  | UserRequestSuccessAction
  | UserRequestErrorAction;

export const userReducer: Reducer<RootUserState, UserAction> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
