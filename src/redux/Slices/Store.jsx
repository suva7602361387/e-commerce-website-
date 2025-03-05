import { configureStore } from "@reduxjs/toolkit";
import { CartSlices } from "./CartSlices";


export const store=configureStore({
    reducer:{
        cart:CartSlices.reducer
    },

})

export default store;