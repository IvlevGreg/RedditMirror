import { Reducer } from 'redux';
import {
  LOADER_COMMENTS_ON,
  LOADER_COMMENTS_OFF,
  ERROR_COMMENTS_ON,
  ERROR_COMMENTS_OFF,
  RootCommentsLoaderState,
} from './types';

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
