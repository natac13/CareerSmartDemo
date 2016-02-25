import { createAction } from 'redux-actions';

import {
    OPEN,
    CLOSE,
    CLOSE_ALL
} from '../constants/';

export const open = createAction(OPEN);
export const close = createAction(CLOSE);
export const closeAll = createAction(CLOSE_ALL);