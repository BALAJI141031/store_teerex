import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    return response.data;
  }
);

export type Product = {
  id: number;
  imageURL: string;
  name: string;
  price: number;
  currency: string;
  color: string;
  gender: string;
  quantity: number;
};

export interface CatalogueSlice {
  products: Product[];
  error: string;
  loading: boolean;
  isError: boolean;
}

const initialState = { loading: true } as CatalogueSlice;

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export const {} = catalogueSlice.actions;
export default catalogueSlice.reducer;
