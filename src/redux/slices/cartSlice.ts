"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StoreState {
  cartData: any[];
  totalItems: number;
  totalAmount: number;
}

const initialState: StoreState = {
  cartData: [],
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice: any = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      const tempItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (tempItem) {
        const tempCart = state.cartData.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.price;
            return { ...item, quantity: newQty, totalPrice: newTotalPrice };
          } else {
            return item;
          }
        });
        state.cartData = tempCart;
      } else {
        state.cartData.push(action.payload);
      }
    },
    toggleCartQty(state, action: PayloadAction<any>) {
      console.log(action.payload.id);
      console.log(action.payload.type);
      const tempCart = state.cartData.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INC") {
            tempQty++;
            tempTotalPrice = tempQty * item.price;
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.price;
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
      state.cartData = tempCart;
    },

    deleteProduct: (state, action: PayloadAction<any>) => {
      const tempCart = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      state.cartData = tempCart;
    },
    resetCart: (state) => {
      state.cartData = [];
    },
    getCartTotal: (state) => {
      const { cartData } = state;
      const { totalAmount, totalItems } = cartData.reduce(
        (acc, cartItem) => {
          acc.totalAmount += cartItem.totalPrice;
          acc.totalItems += cartItem.quantity;
          return acc;
        },
        { totalAmount: 0, totalItems: 0 }
      );

      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
    },
  },
});

export const {
  addToCart,
  toggleCartQty,
  deleteProduct,
  resetCart,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
