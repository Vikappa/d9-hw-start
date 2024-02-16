import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favCompanyReducer from '../reducers/mainReducer';
import trendingReducer from "../reducers/trendingReducer";
import postcastReducer from "../reducers/podcastReducer";

const mainReducer = combineReducers({
    currentTracklist: favCompanyReducer, 
    trendingAlbum: trendingReducer,
    podcastAlbum: postcastReducer
})

const store = configureStore({
    reducer: mainReducer
});

export default store

