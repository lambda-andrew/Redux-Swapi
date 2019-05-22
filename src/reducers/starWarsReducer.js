import { FETCHING_CHARACTERS, SUCCESS_GETTING_CHARACTERS, FAILURE_GETTING_CHARACTERS } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ''
  
};
export const charsReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
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
        characters: action.payload.results,
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
