import { configureStore } from '@reduxjs/toolkit';
import cardListSlice from './cardList/cardListSlice';

export const store = configureStore({
  reducer: {
    cardList: cardListSlice,
  },
});
