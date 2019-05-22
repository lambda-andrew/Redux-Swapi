import { FETCHING_CHARACTERS, SUCCESS_GETTING_CHARACTERS, FAILURE_GETTING_CHARACTERS } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
    return {
      ...state,
      error: '',
      fetching: true,
    }
    case SUCCESS_GETTING_CHARACTERS:
    return {
      ...state,
      error: '',
      characters: action.payload,
      fetching: false
    }
    case FAILURE_GETTING_CHARACTERS:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    default:
      return state;
  }
};
