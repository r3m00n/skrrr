import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/cardSlice';
import gameSlice from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    cards: cardSlice,
    gameInfo: gameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
