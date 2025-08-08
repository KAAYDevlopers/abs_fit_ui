import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface ProductCatalogState {
  products: Product[];
}

const initialState: ProductCatalogState = {
  products: [],
};

const ProductCatalog = createSlice({
  name: "ProductCatalog",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action: PayloadAction<Product[]>) => {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export const { actions } = ProductCatalog;
export default ProductCatalog.reducer;
