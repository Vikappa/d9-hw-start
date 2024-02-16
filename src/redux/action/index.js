export const ADD_TO_TRACKLIST = "ADD_TO_TRACKLIST"
export const REMOVE_FROM_TRACKLIST = "REMOVE_FROM_TRACKLIST"
export const SAVE_TRENDING_ALBUM = "SAVE_TRENDING_ALBUM"
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER"
export const SEARCH = 'SEARCH'
export const SWIPE_TRENDING_ALBUM = 'SWIPE_TRENDING_ALBUM'
export const SAVE_PODCAST_ALBUM = 'SAVE_PODCAST_ALBUM'
export const SWIPE_PODCAST_ALBUM = 'SWIPE_PODCAST_ALBUM'
const baseEndpointSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";


export const addToTrackList = (payload) => {
    return {
      type: ADD_TO_TRACKLIST,
      payload: payload
    };
  };
  
  export const removeFromFavList = (payload) => {
    return {
      type: REMOVE_FROM_TRACKLIST,
      payload: payload
    };
  };

  export const getTrendingAlbum = (payload) => {
    return {
      type: SAVE_TRENDING_ALBUM,
      payload: payload
    };
  };

  export const getPodcastAlbum = (payload) => {
    return {
      type: SAVE_PODCAST_ALBUM,
      payload: payload
    };
  };

  export const swipe = () => { 
    return {
      type: SWIPE_TRENDING_ALBUM
    }
   }

   export const fetchTracklist = (query) => {
    return async (dispatch) => {  
      try {
        console.log(query)
        const response = await fetch(query)
        if (response.ok) {
          
                  const { data } = await response.json();
                  if(data.length > 0){
                  // dispatch(addToTrackList(data))
                  }
      } else {
        alert("Error fetching results")
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


  export const fetchTrendingAlbum = (query) => {
    return async (dispatch) => {  
      try {
        const response = await fetch(baseEndpointSearch + query)
        if (response.ok) {
          
                  const { data } = await response.json();
                  if(data.length > 0){
                  dispatch(getTrendingAlbum(data))
                  }
      } else {
        alert("Error fetching results")
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

  export const fetchPodcastAlbum = (query) => {
    return async (dispatch) => {  
      try {
        const response = await fetch(baseEndpointSearch + query)
        if (response.ok) {
          
                  const { data } = await response.json();
                  if(data.length > 0){
                  dispatch(getPodcastAlbum(data))
                  }
      } else {
        alert("Error fetching results")
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