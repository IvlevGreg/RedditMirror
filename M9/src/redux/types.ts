export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export type RootCommentsState = {
  commentText: string;
};

export type RootAppState = {
  loading: boolean;
  error: null | string;
};

export type RootState = {
  commentsReducer: RootCommentsState;
  appReducer: RootAppState;
};

export const COMMENTS_LOAD = 'COMMENTS_LOAD';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';

export const ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON';
export const ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF';
