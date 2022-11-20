import {
  LOADER_COMMENTS_ON,
  LOADER_COMMENTS_OFF,
} from './commentsLoaderReducer';

export function loaderCommentsOn() {
  return {
    type: LOADER_COMMENTS_ON,
  };
}
export function loaderCommentsOff() {
  return {
    type: LOADER_COMMENTS_OFF,
  };
}
