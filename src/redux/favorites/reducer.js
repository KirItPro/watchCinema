import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        itemsInFavorites: []
    },
    reducers: {
        setItemInFavorites: (state, action) => {
            state.itemsInFavorites.push(action.payload);
        },
        deletedItemFromFavorites: (state, action) => {
            state.itemsInFavorites = state.itemsInFavorites.filter(film => film.id !== action.payload)
        }
    }
});

export const {setItemInFavorites, deletedItemFromFavorites} = favoriteSlice.actions;
export default favoriteSlice.reducer;