import {
    EVENTS_FETCHING, EVENTS_FETCH_SUCCESS, EVENTS_FETCH_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    events: {},
    isFetching: false,
    fetchingFailed: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EVENTS_FETCHING:
            return {
                ...state, 
                events: {},
                isFetching: true,
                fetchingFailed: false
            };
        case EVENTS_FETCH_SUCCESS:
            return {
                ...state, 
                events: action.payload, 
                isFetching: false, 
                fetchingFailed: false
            };
        case EVENTS_FETCH_FAILURE:
            return {
                ...state,
                events: {},
                isFetching: false,
                fetchingFailed: true
            };
        default:
            return state;
    }
};
