import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deletedItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(cart => cart.id !== action.payload)
        }
    }
});

export const {setItemInCart, deletedItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;