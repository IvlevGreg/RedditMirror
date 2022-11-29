import { Reducer } from 'redux';

export const COMMENTS_LOAD = 'COMMENTS_LOAD';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export const LOADER_ERROR_ON = 'LOADER_ERROR_ON';
export const LOADER_ERROR_OFF = 'LOADER_ERROR_OFF';

const intialState: RootAppState = {
  loading: false,
  error: null,
  isError: false,
};

export type RootAppState = {
  loading: boolean;
  error: null | Error;
  isError: boolean;
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
        isError: false,
        error: null,
      };

    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
        isError: false,
      };

    case LOADER_ERROR_ON:
      return {
        ...state,
        error: action.error,
        isError: true,
      };

    case LOADER_ERROR_OFF:
      return {
        ...state,
        error: null,
        isError: false,
      };

    default:
      return state;
  }
};
