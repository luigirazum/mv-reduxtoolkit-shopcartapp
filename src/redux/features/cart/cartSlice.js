import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  () => fetch(url)
    .then((resp) => resp.json())
    .catch((err) => err),
);

const initialState = {
  cartItems: [],
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
  extraReducers: {
    [getCartItems.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getCartItems.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      cartItems: action.payload,
    }),
    [getCartItems.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

// console.log(cartSlice);

export const {
  clearCart, removeItem, increase, decrease, calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
