// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

/**
 * Buat slice: untuk menghasilkan action dan reducers.
 * Menerima param object: name, initialState, reducers
 */

const provincesSlice = createSlice({
    name: "Provinces Slice",
    initialState: {
        provinces: data.provinces
    },
    reducers: {
        updateProvinces(state, action) {
            const dataAction = action.payload[0];
            const dataProvinces = state.provinces;
            const index = dataProvinces.findIndex((item) => item.kota === dataAction.provinsi);
            const foundProvinces = dataProvinces.find((item) => item.kota === dataAction.provinsi);
            // console.log(foundProvinces);
            state.provinces[index] = {
                // spread operator untuk copy semua data provinsi yang sudah ditemukan berdasarkan provinsi
                ...foundProvinces,
                // update property berdasarkan nlai dari status
                [dataAction.status]: parseInt(foundProvinces[dataAction.status]) + parseInt(dataAction.jumlah)
            }
        }
    }
});

/**
 * Slice menghasilkan action dan reducers
 * Nama action diambil dari nama reducer
 */
const { updateProvinces } = provincesSlice.actions;
const provincesReducer = provincesSlice.reducer;

// Export reducers dan actions
export default provincesReducer;
export { updateProvinces };
