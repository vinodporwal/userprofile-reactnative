import {roots} from '../constants';
import {APP_START, AUTH_VERIFIED} from './application.actionsTypes';

const initialState = {
  root: roots.INSIDE,
};

export default function applicationReducer(state = initialState, action) {
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        ...action.payload,
      };

    case AUTH_VERIFIED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
