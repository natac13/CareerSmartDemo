import { List, fromJS } from 'immutable';

import {
    ADD_USER
} from '../constants/';

const initialState = List();

const users = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return state.push(fromJS(action.payload));
        default:
            return state;
    }
};

export default users;