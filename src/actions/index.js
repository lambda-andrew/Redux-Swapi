import axios from 'axios';

export const FETCHING_CHARACTERS = "FETCHING_CHARACTERS";
export const SUCCESS_GETTING_CHARACTERS = "SUCCESS_GETTING_CHARACTERS";
export const FAILURE_GETTING_CHARACTERS = "FAILURE_GETTING_CHARACTERS";

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS });
    axios
      .get(
        "https://swapi.co/api/people"
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: SUCCESS_GETTING_CHARACTERS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE_GETTING_CHARACTERS,
          payload: err
        });
      });
  };
  