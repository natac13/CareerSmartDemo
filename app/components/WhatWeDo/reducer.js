import { fromJS } from 'immutable';
import { curry } from 'ramda';

import {
  WHAT_WE_DO_CLOSE,
  WHAT_WE_DO_OPEN,
} from './constants';

import whatWeDo from './whatWeDo.json';

const initialState = fromJS({
  isWhatWeDoOpen: false,
  whatWeDo,
});

const whatWeDoClose = curry((dispatch, event) => {
  event.preventDefault();
  if (typeof dispatch !== 'function') { return false; }
  return dispatch({ type: WHAT_WE_DO_CLOSE });
});

const whatWeDoOpen = curry((dispatch, event) => {
  event.preventDefault();
  if (typeof dispatch !== 'function') { return false; }
  return dispatch({ type: WHAT_WE_DO_OPEN });
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case WHAT_WE_DO_OPEN:
      return state.set('isWhatWeDoOpen', true);
    case WHAT_WE_DO_CLOSE:
      return state.set('isWhatWeDoOpen', false);
    default:
      return state;
  }
}

export default reducer;

export {
  initialState,
  whatWeDoClose,
  whatWeDoOpen,
};
