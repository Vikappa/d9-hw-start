export const ADD_TO_FAVLIST = "ADD_TO_FAVLIST"
export const REMOVE_FROM_FAVLIST = "REMOVE_FROM_FAVLIST"
export const SAVE_SEARCH_RESULT = "SAVE_SEARCH_RESULT"
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER"
export const SEARCH = 'SEARCH'
export const SWIPE_SEARCH_RESULTS = 'SWIPE_SEARCH_RESULTS'
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";


export const addToFavlist = (payload) => {
    return {
      type: ADD_TO_FAVLIST,
      payload: payload
    };
  };
  
  export const removeFromFavList = (payload) => {
    return {
      type: REMOVE_FROM_FAVLIST,
      payload: payload
    };
  };

  export const saveSearchResult = (payload) => {
    return {
      type: SAVE_SEARCH_RESULT,
      payload: payload
    };
  };

  export const swipe = () => { 
    return {
      type: SWIPE_SEARCH_RESULTS
    }
   }

  export const getSearchResultsAction = (query) => {
      return async (dispatch, getState) => {  
          try {
              const response = await fetch(baseEndpoint + query + "&limit=20");
              if (response.ok) {
                  const { data } = await response.json();
                  if(data.length > 0){
                  dispatch(saveSearchResult(data));
                  }
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      } finally {
        dispatch({
          type: TURN_OFF_SPINNER,
        })
      }
    }
  }
