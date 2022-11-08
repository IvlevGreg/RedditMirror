import { Reducer } from 'redux';
import { RootCommentsState, UPDATE_COMMENT } from './types';

const initialState: RootCommentsState = {
  commentText: '',
};

export const commentsReducer: Reducer<RootCommentsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return { ...state, commentText: action.text };

    default:
      return state;
  }
};
