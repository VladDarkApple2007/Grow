import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    products: [],
    isFavorite: false
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const alreadyInFavorite = state.items.some(
        (product) => product.id === item.id
      );
      if (!alreadyInFavorite) {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeFavorite: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
    addToBasket: (state, action) => {
      const product = action.payload;
      const alreadyInCart = state.products.some(
        (item) => item.id === product.id
      );
      if (!alreadyInCart) {
        state.products.push({ ...product, quantity: product.quantity || 1  });
      }
    },
    clearBasket: (state) => {
      state.products = [];
    },
    removeFromBasket: (state, action) => {
      const idToRemove = action.payload;
      state.products = state.products.filter((item) => item.id !== idToRemove);
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    increase: (state, action) => {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) item.quantity += 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) item.quantity = Math.max(1, (item.quantity -= 1));
    },
  },
});

export const {
  addToCart,
  addToBasket,
  removeFromBasket,
  setPriceUpdate,
  setCount,
  increase,
  decrease,
  clearBasket,
  clearCart,
  removeFavorite,
  setIsFavorite
} = cartSlice.actions;
export default cartSlice.reducer;
