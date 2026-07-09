import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isShowing: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const payloadItem = action.payload;
      if (state.items.find((item) => item.id === payloadItem.id)) {
        return; // don't add already existing item
      }
      payloadItem.quantity = 1;
      payloadItem.total = payloadItem.price;
      state.items.push(payloadItem);
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.findIndex((item) => item.id === id);
      if (existingItem < 0) {
        return; // item is not in cart
      }
      state.items[existingItem].quantity += 1;
      state.items[existingItem].total += state.items[existingItem].price;
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.items.findIndex((item) => item.id === id);
      if (existingItem < 0) {
        return; // item is not in cart
      }
      if (state.items[existingItem].quantity === 1) {
        state.items.splice(existingItem, 1);
        return;
      }
      state.items[existingItem].quantity -= 1;
      state.items[existingItem].total -= state.items[existingItem].price;
    },
    hideCart(state) {
      state.isShowing = false;
    },
    showCart(state) {
      state.isShowing = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
