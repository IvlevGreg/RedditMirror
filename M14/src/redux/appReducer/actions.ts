import {
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  LOADER_ERROR_ON,
  LOADER_ERROR_OFF,
} from './appReducer';

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

export function loaderErrorOn(error: Error) {
  return {
    type: LOADER_ERROR_ON,
    error,
  };
}

export function loaderErrorOff() {
  return {
    type: LOADER_ERROR_OFF,
  };
}
