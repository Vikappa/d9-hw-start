import {SAVE_SEARCH_RESULT} from '../action';   

const initialState = {
    searchResults: [],
  };
  
  const searchResultsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SAVE_SEARCH_RESULT:
        let newSearchResults = [...action.payload]
        newSearchResults.push(action.payload)
        return {searchResults: newSearchResults}
      default:
        return state;
    }
  }

  export default searchResultsReducer