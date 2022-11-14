import { Reducer } from 'redux';

export const LOADER_COMMENTS_ON = 'LOADER_COMMENTS_ON';
export const LOADER_COMMENTS_OFF = 'LOADER_COMMENTS_OFF';
export const ERROR_COMMENTS_ON = 'ERROR_COMMENTS _ON';
export const ERROR_COMMENTS_OFF = 'ERROR_COMMENTS_OFF';

export type RootCommentsLoaderState = {
  loading: boolean;
  error: null | string;
};

const intialState: RootCommentsLoaderState = {
  loading: true,
  error: null,
};

export const commentsLoaderReducer: Reducer<RootCommentsLoaderState> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case LOADER_COMMENTS_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADER_COMMENTS_OFF:
      return {
        ...state,
        loading: false,
      };

    case ERROR_COMMENTS_ON:
      return {
        ...state,
        error: action.text,
      };

    case ERROR_COMMENTS_OFF:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
