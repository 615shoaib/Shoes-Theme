import { createSlice } from '@reduxjs/toolkit';
import { ProductsApi } from '../Api/Api';


const ProductsData = createSlice({

    name: 'products',
    initialState: {
        ProductsItems: [],
        loading: false,
        error: null,
    }, 
    reducers: {
        getLoading: (state, action) => {
            state.loading = action.payload;
            state.error = null;
        },
        getError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        getProducts: (state, action) => {
            state.ProductsItems = action.payload;
            state.error = null;
            state.loading = false;
        }
    }
});

const { getLoading, getError, getProducts } = ProductsData.actions;

export default  ProductsData.reducer;


export const fetchProductsAsync = () => async (dispatch) => {
    try {
      dispatch(getLoading());
      const data = await ProductsApi(); 
      dispatch(getProducts(data));
    } catch (error) {
      dispatch(getError(error.message));
    }
  };

  





  
  