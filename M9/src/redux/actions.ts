import { ActionCreator, AnyAction } from 'redux';
import {
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  LOADER_COMMENTS_OFF,
  LOADER_COMMENTS_ON,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
} from './types';

// export function commentCreate(text: string, id: string) {
//   return {
//     type: COMMENT_CREATE,
//     data: { text, id },
//   };
// }

// export function commentUpdate(text: string, id: string) {
//   return {
//     type: COMMENT_UPDATE,
//     data: { text, id },
//   };
// }

// export function commentDelete(id: string) {
//   return {
//     type: COMMENT_DELETE,
//     id,
//   };
// }

// export function commentUpdate(text: string) {
//   return {
//     type: COMMENT_UPDATE,
//     data: text,
//   };
// }

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
