export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export const COMMENTS_LOAD = 'COMMENTS_LOAD';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export const ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON';
export const ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF';

export const LOADER_COMMENTS_ON = 'LOADER_COMMENTS_ON';
export const LOADER_COMMENTS_OFF = 'LOADER_COMMENTS_OFF';
export const ERROR_COMMENTS_ON = 'ERROR_COMMENTS _ON';
export const ERROR_COMMENTS_OFF = 'ERROR_COMMENTS_OFF';

export const SET_TOKEN = 'SET_TOKEN';

export type RootCommentsState = {
  comments: Array<{
    commentText: string;
    id: string;
  }>;
};

export type RootAppState = {
  loading: boolean;
  error: null | string;
};

export type RootCommentsLoaderState = {
  loading: boolean;
  error: null | string;
};

export type RootTokenState = {
  token: string;
};

export type RootState = {
  commentsReducer: RootCommentsState;
  appReducer: RootAppState;
  commentsLoaderReducer: RootCommentsLoaderState;
  tokenReducer: RootTokenState;
};
