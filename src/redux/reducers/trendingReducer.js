import {SAVE_TRENDING_ALBUM} from '../action' 
import { SWIPE_TRENDING_ALBUM } from '../action'

const initialState = {
    trendingAlbumArray: [],
    lastSearch: [],
  };
  
  const trendingReducer = (state = initialState, action) => {
    switch (action.type) {

      case SAVE_TRENDING_ALBUM:
        let newArraySearchResult = [...state.trendingAlbumArray]
        newArraySearchResult.push(action.payload)
        return {trendingAlbumArray: newArraySearchResult, lastSearch: action.payload}
      case SWIPE_TRENDING_ALBUM:
        return {trendingAlbumArray: [...state.trendingAlbumArray], lastSearch: []}
      default:
        return state;
    }
  }

  export default trendingReducer