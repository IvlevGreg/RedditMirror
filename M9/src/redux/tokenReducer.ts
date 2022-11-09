import { Reducer } from 'redux';
import { RootTokenState, SET_TOKEN } from './types';

const intialState: RootTokenState = {
  token: '',
};

export const tokenReducer: Reducer<RootTokenState> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
