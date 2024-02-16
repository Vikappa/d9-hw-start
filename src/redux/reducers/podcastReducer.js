import {SAVE_PODCAST_ALBUM} from '../action' 
import { SWIPE_PODCAST_ALBUM } from '../action'

const initialState = {
    podcastAlbumArray: [],
    lastSearch: [],
  };
  
  const postcastReducer = (state = initialState, action) => {
    switch (action.type) {

      case SAVE_PODCAST_ALBUM:
        let newArraySearchResult = [...state.podcastAlbumArray]
        newArraySearchResult.push(action.payload)
        return {podcastAlbumArray: newArraySearchResult, lastSearch: action.payload}
      case SWIPE_PODCAST_ALBUM:
        return {podcastAlbumArray: [...state.podcastAlbumArray], lastSearch: []}
      default:
        return state;
    }
  }

  export default postcastReducer