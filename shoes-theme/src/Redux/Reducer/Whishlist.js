// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const updateJson =localStorage.getItem('whishlist')
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
        state.wishlistItems.push(productId);
      }
      localStorage.setItem("whishlist", JSON.stringify(state.wishlistItems));
    },
    removeWhishList(state, action) {
      const { id } = action.payload;
      
      state.wishlistItems = state.wishlistItems.filter(item => item.productId !== id);
    
      localStorage.setItem("whishlist", JSON.stringify(state.wishlistItems));
    },
    removeAllWhishList(state,action){
      state.wishlistItems=[]
      localStorage.removeItem("whishlist")
    }
    
    
  },
});

export const { addToWishlistById,removeWhishList,removeAllWhishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
