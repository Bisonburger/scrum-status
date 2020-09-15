import { combineReducers } from 'redux';

import { LOAD_STATUS } from './actions';

const initialState = {

}


const status = (state = initialState, action ) {
    switch (action.type) {
        case LOAD_STATUS: {
            const { date } = action.payload;
            return { 
                ...state,
                id
            }
        }
    }
}

export default combineReducers( { })