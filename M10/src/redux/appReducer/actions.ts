import { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } from './appReducer';

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
