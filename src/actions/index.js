// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const SUCCESS_GETTING_CHARACTERS = "SUCCESS_GETTING_CHARACTERS";
export const FAILURE_GETTING_CHARACTERS = "FAILURE_GETTING_CHARACTERS";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function fetchCharacters() {
    return function (dispatch) {
        dispatch({ type: FETCHING_CHARACTERS });
        axios
            .get("https://swapi.co/api/people/")
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: SUCCESS_GETTING_CHARACTERS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FAILURE_GETTING_CHARACTERS,
                    payload: err
                });

            });}
    
};