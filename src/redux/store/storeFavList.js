import { configureStore } from "@reduxjs/toolkit";
import mainReducer from '../reducers/mainReducerFavList';

const store = configureStore({
    reducer: mainReducer
});

export default store;

