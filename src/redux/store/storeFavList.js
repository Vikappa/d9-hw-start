import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favCompanyReducer from '../reducers/mainReducer';
import searchResultsReducer from "../reducers/secondReducer";

const mainReducer = combineReducers({
    favList: favCompanyReducer, 
    searchResults: searchResultsReducer
})

const store = configureStore({
    reducer: mainReducer
});

export default store

