import {
  CONTACT_OPEN,
  CONTACT_CLOSE,
} from '../constants/';

import { createAction } from 'redux-actions';

export const contactOpen = createAction(CONTACT_OPEN);
export const contactClose = createAction(CONTACT_CLOSE);
