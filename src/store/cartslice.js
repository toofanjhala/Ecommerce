import { createSlice } from "@reduxjs/toolkit";

const cartintialstate={Visible:false,notification:null}
const CartSlice=createSlice({
    name:"Cart",
    initialState:cartintialstate,
    reducers:{
        toggle(state){
           state.Visible=!state.Visible
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
          },

    }

})




export const CartAction=CartSlice.actions;
export default CartSlice
