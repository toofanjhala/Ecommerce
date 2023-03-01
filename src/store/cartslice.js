import { createSlice } from "@reduxjs/toolkit";

const cartintialstate={Visible:false}
const CartSlice=createSlice({
    name:"Cart",
    initialState:cartintialstate,
    reducers:{
        toggle(state){
           state.Visible=!state.Visible
        }
    }

})




export const CartAction=CartSlice.actions;
export default CartSlice
