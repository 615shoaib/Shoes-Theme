import { createSlice } from '@reduxjs/toolkit';

// Retrieve data from localStorage
const updateJson = localStorage.getItem('whishlist');
const initialState = {
  wishlistItems: updateJson ? JSON.parse(updateJson) : [],
  totalPrice: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlistById(state, action) {
      const productId = action.payload;
      if (!state.wishlistItems.includes(productId)) {
        const newWishlistItems = [...state.wishlistItems, productId];
        state.wishlistItems = newWishlistItems;
        localStorage.setItem('whishlist', JSON.stringify(newWishlistItems));
      }
    },
    removeWhishList(state, action) {
      const { id } = action.payload;
      // Filter out the item with the specified id
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== id);
      // Update localStorage if needed
      localStorage.setItem('whishlist', JSON.stringify(state.wishlistItems));
    },
    removeAllWhishList(state, action) {

      state.wishlistItems = [];
      localStorage.removeItem('whishlist');
    },
  },
});

export const { addToWishlistById, removeWhishList, removeAllWhishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
