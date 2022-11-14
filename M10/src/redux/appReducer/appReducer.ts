import { Reducer } from 'redux';

export const COMMENTS_LOAD = 'COMMENTS_LOAD';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export const ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON';
export const ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF';

const intialState: RootAppState = {
  loading: true,
  error: null,
};

export type RootAppState = {
  loading: boolean;
  error: null | string;
};

export const appReducer: Reducer<RootAppState> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };

    case ERROR_DISPLAY_ON:
      return {
        ...state,
        error: action.text,
      };

    case ERROR_DISPLAY_OFF:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
