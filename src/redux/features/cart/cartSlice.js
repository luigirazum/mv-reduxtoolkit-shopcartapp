import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../settings/cartItems';

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => ({
      ...state,
      cartItems: [],
    }),
    removeItem: (state, action) => {
      const itemId = action.payload;
      const cartItems = state.cartItems.filter((item) => item.id !== itemId);

      return ({
        ...state,
        cartItems,
      });
    },
    increase: (state, { payload }) => {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }

        return item;
      });

      return ({
        ...state,
        cartItems,
      });
    },
    decrease: (state, { payload }) => {
      const cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }

        return item;
      });

      return ({
        ...state,
        cartItems,
      });
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      return ({
        ...state,
        amount,
        total,
      });
    },
  },
});

// console.log(cartSlice);

export const {
  clearCart, removeItem, increase, decrease, calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
