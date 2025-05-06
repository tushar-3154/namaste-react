import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            //Redux Toolkit uses immer behide
             
            state.items.push(action.payload);
        },
        removeitems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }

    }
});


export const { addItem, removeitems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;