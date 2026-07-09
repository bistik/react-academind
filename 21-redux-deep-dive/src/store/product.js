import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts(state, action) {
      console.log("in loadProducts reducer");
      state.products = action.payload;
    },
  },
});

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/products");

      if (!response.ok) {
        throw new Error("Could not fetch products");
      }
      const data = await response.json();

      return data;
    };

    try {
      console.log("we about to fetch data");
      const productData = await fetchData();
      dispatch(productSlice.actions.loadProducts(productData));
    } catch (error) {
      console.log("error in fetching product data", error);
    }
  };
};

export default productSlice.reducer;
