// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToWishlistById(state, action) {
      const productId = action.payload;
      if (!state.wishlistItems.includes(productId)) {
        state.wishlistItems.push(productId);
      }
    },
  },
});

export const { addToWishlistById } = wishlistSlice.actions;

export default wishlistSlice.reducer;
