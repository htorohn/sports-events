import {
    EVENTS_FETCHING, EVENTS_FETCH_SUCCESS, EVENTS_FETCH_FAILURE
} from './types';


export const productsFetch = () => {
    //console.log('estoy en productsFetch!');
    return (dispatch) => {
        dispatch({ type: EVENTS_FETCHING });
        window.fetch('api/v1/events')
          .then(response => response.json())
          .then(response => {
              dispatch({ type: EVENTS_FETCH_SUCCESS, payload: response });
          })
          .catch(error => {
              dispatch({ type: EVENTS_FETCH_FAILURE, payload: error })
          })
    };
};
