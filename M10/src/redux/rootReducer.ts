import { Action, combineReducers, Reducer } from 'redux';
import { commentsReducer } from './commentsReducer';
import { appReducer } from './appReducer';
import { tokenReducer } from './tokenReducer';
import { RootState } from './types';
import { commentsLoaderReducer } from './commentsLoaderReducer';

export const rootReducer: Reducer<RootState> = combineReducers({
  commentsReducer,
  appReducer,
  commentsLoaderReducer,
  tokenReducer,
});
