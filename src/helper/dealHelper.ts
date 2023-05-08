import { Card, Deck, Column } from '../types/types';

type ReturnProps = [[Column, Column, Column], Card, Deck];

const deal = (deck: Deck): ReturnProps => {
  const remainingDeck = deck.slice(12);
  const playerCards: any = Array.from({ length: 4 }, () =>
    Array.from({ length: 3 }, () => deck.shift())
  );
  const firstDisgard = { ...remainingDeck.pop()!, visible: true };
  return [playerCards, firstDisgard, remainingDeck];
};

export default deal;
