import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { getcartFromLS } from '../../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getcartFromLS();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItems, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
