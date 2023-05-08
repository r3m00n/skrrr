import uuid from 'react-native-uuid';
import { Deck } from '../types/types';

export const MAXTURNS = 16; //  -1

const distributions: { values: number[]; quantity: number }[] = [
  { values: [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], quantity: 10 },
  { values: [0], quantity: 15 },
  { values: [-2], quantity: 5 },
];

const getCards = (): Deck => {
  const deck: Deck = [];
  distributions.forEach(distribution => {
    distribution.values.forEach(value => {
      for (let i = 0; i < distribution.quantity; i++) {
        deck.push({ value: value, visible: false, id: uuid.v4().toString() });
      }
    });
  });
  return deck;
};

const shuffle = (a: Deck): Deck => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const createDeck = (): Deck => {
  const deck = getCards();
  return shuffle(deck);
};

export const ordered = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // FIXME: delete

export default createDeck;
