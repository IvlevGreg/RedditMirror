import { ActionCreator, AnyAction } from 'redux';
import {
  UPDATE_COMMENT,
  LOADER_COMMENTS_OFF,
  LOADER_COMMENTS_ON,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  SET_TOKEN,
} from './types';

export const updateComment = (commentText: string, id: string) => ({
  type: UPDATE_COMMENT,
  commentText,
  id,
});

export function loaderAppOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function loaderAppOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

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

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    token,
  };
}
