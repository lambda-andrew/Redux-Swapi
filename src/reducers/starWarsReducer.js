import {FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE} from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: "",
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_START:
      return {
        ...state,
        error: "",
        fetching: true,
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload.results,
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
