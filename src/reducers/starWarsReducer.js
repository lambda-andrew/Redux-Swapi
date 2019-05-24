import { FECTH_START, FECTH_SUCCESS, FECTH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FECTH_START: 
      return {
        ...state,
        fetching: true,
        error: ''
      }
    case FECTH_SUCCESS: 
      return {
        ...state,
        fetching: false,
        error: '',
        characters: action.payload
      }
    case FECTH_FAILURE: 
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
