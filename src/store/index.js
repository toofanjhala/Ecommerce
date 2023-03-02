import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartslice"
import ItemSlice from "./itemsSlice";
const StoreRedux=configureStore({
    reducer:{Cart:CartSlice.reducer,
    Item:ItemSlice.reducer}
})

export default StoreRedux