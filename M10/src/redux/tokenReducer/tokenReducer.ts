import { Reducer } from 'redux';

export const SET_TOKEN = 'SET_TOKEN';

const intialState: RootTokenState = {
  token: '',
};

export type RootTokenState = {
  token: string;
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
