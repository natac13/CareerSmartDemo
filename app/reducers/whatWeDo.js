import { fromJS } from 'immutable';

import {
  WHAT_WE_DO_OPEN,
  WHAT_WE_DO_CLOSE,
} from '../constants/';

import whatWeDo from '../resources/whatWeDo.json';

const initialState = fromJS({
  isWhatWeDoOpen: false,
  whatWeDo,
});

function whatWeDo(state = initialState, action) {
  switch (action.type) {
    case WHAT_WE_DO_OPEN:
      return state.set('isWhatWeDoOpen', true);
    case WHAT_WE_DO_CLOSE:
      return state.set('isWhatWeDoOpen', false);
    default:
      return state;
  }
}

export default whatWeDo;
