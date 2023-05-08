import { Column } from '../types/types';

function areAllVisibleAndSameValue(column: Column) {
  const firstCard = column[0];
  return column.every(card => card.visible && card.value === firstCard.value);
}

const colSameValVisible = (playerCards: Column[]): number => {
  for (let i = 0; i < playerCards.length; i++) {
    if (areAllVisibleAndSameValue(playerCards[i])) return i;
  }
  return -1;
};

export default colSameValVisible;
