import axios from 'axios';
export const FECTH_START = 'FETCH_START';
export const FECTH_SUCCESS = 'FETCH_SUCCESS';
export const FECTH_FAILURE = 'FETCH_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FECTH_START });
    axios  
        .get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res.data.results)
            dispatch({ type: FECTH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FECTH_FAILURE, payload: `${err.response.status} ${err.response.statusText}`})
        })
}