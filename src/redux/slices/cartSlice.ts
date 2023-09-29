import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";

interface CartState {
  cartData: Product[];
}

const initialState: CartState = {
  cartData: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cartData.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cartData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.cartData = state.cartData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cartData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
