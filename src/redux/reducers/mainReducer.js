import { ADD_TO_TRACKLIST, REMOVE_FROM_TRACKLIST } from '../action';

const initialState = {

      content: [],

  };
  
  const favCompanyReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_TO_TRACKLIST:
      return {content: action.payload}
      case REMOVE_FROM_TRACKLIST:

      return {content: []}
      default:
        return state;
    }
  }

  export default favCompanyReducer