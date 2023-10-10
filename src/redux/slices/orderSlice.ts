"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StoreState {
  orderData: any[];
  orderAddressInformation: any[];
}

const initialState: StoreState = {
  orderData: [],
  orderAddressInformation: [],
};

export const orderSlice: any = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderInformation: (state, action: PayloadAction<any>) => {
      state.orderAddressInformation = action.payload;
    },
    saveOrder: (state, action: PayloadAction<any>) => {
      state.orderData = action.payload;
    },
    reSetOrderCart: (state) => {
      state.orderData = [];
      state.orderAddressInformation = [];
    },
  },
});

export const { saveOrder, reSetOrderCart, orderInformation } =
  orderSlice.actions;

export default orderSlice.reducer;
