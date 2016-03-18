import { Map } from 'immutable';
import { curry } from 'ramda';

import {
  NAV_CLOSE,
  NAV_OPEN,
} from './constants';

const open = { type: NAV_OPEN };
const close = { type: NAV_CLOSE };

const navOpen = curry((dispatch, event) => {
  if (!!event) {
    event.preventDefault();
  }
  return dispatch(open);
});

const navClose = curry((dispatch, event) => {
  if (!!event) {
    event.preventDefault();
  }
  return dispatch(close);
});
const initialState = Map({
  isOpen: false,
});

function reducer(state, action) {
  switch (action.type) {
    case NAV_OPEN:
      return state.set('isOpen', true);
    case NAV_CLOSE:
      return state.set('isOpen', false);
    default:
      return state;
  }
}

export default reducer;

export {
  initialState,
  navClose,
  navOpen,
};
