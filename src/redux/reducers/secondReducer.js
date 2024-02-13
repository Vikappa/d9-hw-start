import { SAVE_SEARCH_RESULT } from '../action';

const initialState = {
  searchResults: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_RESULT:
      // Crea una copia dell'array esistente di searchResults
      let newSearchResults = [...state.searchResults];
      // Aggiunge il payload come un singolo array all'array di array
      newSearchResults.push(action.payload);
      return {searchResults: newSearchResults};
    default:
      return state;
  }
}

export default searchResultsReducer;
