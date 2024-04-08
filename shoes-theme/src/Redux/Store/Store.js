import {configureStore} from "@reduxjs/toolkit"
import ProductsReducer from "../Reducer/Reducer"
import CartReducer from "../Reducer/Cart"
import CategoryReducer from "../../Pages/Homepage/CatgoeyBased/Category"
import wishlistReducer from "../Reducer/Whishlist"
const Store =  configureStore({
    reducer:{
        products : ProductsReducer,
        Cart: CartReducer,
        category : CategoryReducer,
        wishlist:wishlistReducer,
    }
})

export default Store;