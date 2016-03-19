import { Map } from 'immutable';

import {
  CONTACT_OPEN,
  CONTACT_CLOSE,
} from '../constants/';

const initialState = Map({
  isContactOpen: false,
});

function contact(state = initialState, action) {
  switch (action.type) {
    case CONTACT_OPEN:
      return state.set('isContactOpen', true);
    case CONTACT_CLOSE:
      return state.set('isContactOpen', false);
    default:
      return state;
  }
}

export default contact;
