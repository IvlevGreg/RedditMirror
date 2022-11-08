import { ActionCreator, AnyAction } from 'redux';
import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, UPDATE_COMMENT } from './types';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
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
