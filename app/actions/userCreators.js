import { createAction } from 'redux-actions';

import {
    ADD_USER
} from '../constants/';

export const addUser = createAction(ADD_USER);
