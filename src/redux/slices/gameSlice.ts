import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type SelectOptions = 'start' | 'idle' | 'flip' | 'discard' | 'draw' | 'end';

export interface CounterState {
  freeTurnover: number;
  selected: SelectOptions;
  turnNumber: number;
  xray: boolean;
}

const initialState: CounterState = {
  freeTurnover: 2,
  selected: 'start',
  turnNumber: 1,
  xray: false,
};

export const counterSlice = createSlice({
  name: 'gameInfo',
  initialState,
  reducers: {
    turnFree: state => {
      state.freeTurnover -= 1;
    },
    setSelected: (state, action: PayloadAction<SelectOptions>) => {
      state.selected = action.payload;
    },
    addTurnover: state => {
      state.freeTurnover = 1;
    },
    addTurn: state => {
      state.turnNumber = state.turnNumber + 1;
    },
    setXray: state => {
      state.xray = true;
    },
    resetGame: state => {
      state.freeTurnover = initialState.freeTurnover;
      state.selected = initialState.selected;
      state.turnNumber = initialState.turnNumber;
    },
  },
});

export const { turnFree, setSelected, addTurnover, addTurn, setXray, resetGame } =
  counterSlice.actions;

export default counterSlice.reducer;
