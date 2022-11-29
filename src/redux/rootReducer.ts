import { Action, combineReducers, Reducer } from 'redux';
import { RootAppState, appReducer } from './appReducer';
import {
  RootCommentsLoaderState,
  commentsLoaderReducer,
} from './commentsLoaderReducer';
import { RootCommentsState, commentsReducer } from './commentsReducer';
import { RootTokenState, tokenReducer } from './tokenReducer';
import { RootUserState, userReducer } from './userReducer/userReducer';

export type RootState = {
  commentsReducer: RootCommentsState;
  appReducer: RootAppState;
  commentsLoaderReducer: RootCommentsLoaderState;
  tokenReducer: RootTokenState;
  userReducer: RootUserState;
};

export const rootReducer: Reducer<RootState> = combineReducers({
  commentsReducer,
  appReducer,
  commentsLoaderReducer,
  tokenReducer,
  userReducer,
});
