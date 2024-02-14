import {SAVE_SEARCH_RESULT} from '../action';   

const initialState = {
    searchResults: [],
    lastSearch: [],
  };
  
  const searchResultsReducer = (state = initialState, action) => {
    switch (action.type) {

      case SAVE_SEARCH_RESULT:
        let newArraySearchResult = [...state.searchResults]
        newArraySearchResult.push(action.payload)
        return {searchResults: newArraySearchResult, lastSearch: action.payload}
      default:
        return state;
    }
  }

  export default searchResultsReducer