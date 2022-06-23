// import configureStore untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
// import moviesSlice dari folder feature
import provincesReducer from "../features/provincesSlice";

/**
 * Membuat store menggunakan configureStore.
 * Menerima param object: reducer.
 * Tambahkan Slice Reducer Movies ke Store.
 */
const store = configureStore({
    reducer: {
        provinces: provincesReducer,
    },
});

export default store;