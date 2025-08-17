import { createSlice } from "@reduxjs/toolkit";
import { removeFromBasket } from "./cartSlice";

const stateBtnSlice = createSlice({
  name: "stateBtn",
  initialState: {
    favorite: {},
    basket: {},
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorite[id]) {
        delete state.favorite[id]; // вимикаємо
      } else {
        state.favorite[id] = true; // увімкнення
      }
    },
    toggleBasket: (state, action) => {
      const id = action.payload;
      if (state.basket[id]) {
        delete state.basket[id];
      } else if (!removeFromBasket) {
        delete state.favorite[id]; // вимикаємо
      } else {
        state.basket[id] = true;
      }
    },
  },
});

export const { toggleFavorite, toggleBasket } = stateBtnSlice.actions;
export default stateBtnSlice.reducer;
