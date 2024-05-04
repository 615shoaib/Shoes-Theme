// categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apikesy } from '../../../Redux/Api/apikesy';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    try {
      const response = await axios.get('https://zahidg21.sg-host.com/wp-json/wc/v3/products/categories', {
        headers: {
          "Authorization": `Basic ${apikesy()}`,
          'content-type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch categories: ' + error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'category/fetchProducts',
  async (categoryId) => {
    try {
      const response = await axios.get(`https://zahidg21.sg-host.com/wp-json/wc/v3/products?category=${categoryId}`, {
        headers: {
          "Authorization": `Basic ${apikesy()}`,
          'content-type': 'application/json'
        }
      });
      return response.data;
      console.log(response.data)
    } catch (error) {
      throw new Error('Failed to fetch products: ' + error.message);
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
