import { createSlice } from "@reduxjs/toolkit";
import { RemoveSingleApi, addToNodeApi } from "../Api/NodeApi/NodeApi";

const persistedCart = localStorage.getItem("addtocart");

const initialState = {
  items: persistedCart ? JSON.parse(persistedCart) : [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const { id, price, quantity ,...rest} = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
    existingItem.quantity += 1;
      } else {
        state.items.push({ id, price, quantity: 1, ...rest });
      }
      localStorage.setItem("addtocart", JSON.stringify(state.items));
      state.totalPrice += price;
      try {
        addToNodeApi(action.payload)
      } catch (error) {
        console.log(`error message ${error.message}`)
      }
    },
  

    removeSingleCart(state, action) {
      const { id } = action.payload;
      
      const updatedItems = state.items.filter(item => item.id !== id);
   
      localStorage.setItem("addtocart", JSON.stringify(updatedItems));
      try {
        RemoveSingleApi(id) 
      } catch (error) {
        console.log(`error message ${error.message}`)
      }
      return {
        ...state,
        items: updatedItems,
      };
     
   
    }
,    
    removeAllOrder(state) {
      state.items = [];
      state.totalPrice = 0;
    
      localStorage.removeItem("addtocart");
     
    },

    IncremesntFuncation(state, action) {
      const { id } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
    
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        state.totalPrice += itemToUpdate.price;
       
        localStorage.setItem("addtocart", JSON.stringify(state.items));
      }
      try {
        addToNodeApi(action.payload)
      } catch (error) {
        console.log(`error message ${error.message}`)
      }
    },
    DecrementFuncation(state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
          state.totalPrice -= state.items[itemIndex].price; 
        } else {
       
          state.totalPrice -= state.items[itemIndex].price; 
          state.items.splice(itemIndex, 1);
         
        }
      }
    },
    
    
    
  },
});

export const { addTocart, removeAllOrder, removeSingleCart,IncremesntFuncation,DecrementFuncation } = cartSlice.actions;

export default cartSlice.reducer;
