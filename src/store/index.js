import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice"
const StoreRedux=configureStore({
    reducer:{Cart:CartSlice.reducer}
})

export default StoreRedux