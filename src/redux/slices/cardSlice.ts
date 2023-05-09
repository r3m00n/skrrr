import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Card, Column } from '../../types/types';
import createDeck from '../../helper/deckHelper';
import deal from '../../helper/dealHelper';

const compleateDeck = createDeck();
let [initialPlayerCards, discardCard, deck] = deal(compleateDeck);

export interface CounterState {
  playerCards: Column[];
  discardPile: Card[];
  deck: Card[];
  shownDrawCard: Card | null;
}

const initialState: CounterState = {
  playerCards: initialPlayerCards,
  discardPile: [discardCard],
  deck: deck,
  shownDrawCard: null,
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    turnCard: (state, action: PayloadAction<string>) => {
      state.playerCards = state.playerCards.map((column: Column) => {
        return column.map(card => {
          return card.id == action.payload ? { ...card, visible: true } : card;
        }) as Column;
      });
    },
    dropColumn: (state, action: PayloadAction<number>) => {
      state.playerCards = [
        ...state.playerCards.slice(0, action.payload),
        ...state.playerCards.slice(1 + action.payload),
      ];
    },
    setShownCard: (state, action: PayloadAction<'new' | null>) => {
      state.shownDrawCard =
        action.payload == 'new' ? { ...state.deck.pop()!, visible: true } : null;
    },
    getNewDisgardCard: (state, action: PayloadAction<'new' | 'draw'>) => {
      if (action.payload == 'draw') {
        state.discardPile = [...state.discardPile, state.shownDrawCard!];
        state.shownDrawCard = null;
      }
      if (action.payload == 'new') {
        state.discardPile = [
          ...state.discardPile,
          { ...state.deck.pop()!, visible: true },
        ];
      }
    },
    placeCard: (state, action: PayloadAction<{ newCard: Card; oldCard: Card }>) => {
      state.playerCards = state.playerCards.map((column: Column) => {
        return column.map(card => {
          if (card.id != action.payload.oldCard.id) return card;
          return action.payload.newCard;
        }) as Column;
      });
    },
    turnAll: state => {
      state.playerCards = state.playerCards.map(column => {
        return column.map(card => {
          return { ...card, visible: true };
        }) as Column;
      });
    },
    resetCards: state => {
      const compleateDeck = createDeck();
      let [initialPlayerCards, discardCard, deck] = deal(compleateDeck);
      state.playerCards = initialPlayerCards;
      state.discardPile = [discardCard];
      state.deck = deck;
      state.shownDrawCard = null;
    },
  },
});

export const {
  turnCard,
  dropColumn,
  setShownCard,
  getNewDisgardCard,
  placeCard,
  turnAll,
  resetCards,
} = cardSlice.actions;

export default cardSlice.reducer;
