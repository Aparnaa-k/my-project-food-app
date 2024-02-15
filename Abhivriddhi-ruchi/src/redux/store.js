import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import catergorySlice from "./slices/catergorySlice";

const Store = configureStore({
    reducer: {
        cart: cartSlice,
        catergory: catergorySlice,
    },
});
export default Store;