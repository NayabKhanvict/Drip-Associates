import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: any;
  detailProduct: any | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: [],
  detailProduct: null,
  loading: "idle",
  error: null,
};

const API_URL = "http://localhost:3000/api/product";

export const fetchDataFromApi = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDetailProduct: (state, action: PayloadAction<any | null>) => {
      state.detailProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromApi.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDataFromApi.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { setDetailProduct } = dataSlice.actions;

export default dataSlice.reducer;
