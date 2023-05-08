const images = {
  cards: {
    back: require('../assets/cards/back.png'),
    'card-2': require('../assets/cards/card-2.png'),
    'card-1': require('../assets/cards/card-1.png'),
    card0: require('../assets/cards/card0.png'),
    card1: require('../assets/cards/card1.png'),
    card2: require('../assets/cards/card2.png'),
    card3: require('../assets/cards/card3.png'),
    card4: require('../assets/cards/card4.png'),
    card5: require('../assets/cards/card5.png'),
    card6: require('../assets/cards/card6.png'),
    card7: require('../assets/cards/card7.png'),
    card8: require('../assets/cards/card8.png'),
    card9: require('../assets/cards/card9.png'),
    card10: require('../assets/cards/card10.png'),
    card11: require('../assets/cards/card11.png'),
    card12: require('../assets/cards/card12.png'),
  },
};

const imageSelect = (card: number | null) => {
  if (card === null || card < -2 || card > 12) {
    return images.cards.back;
  }

  const cardArray = [
    images.cards['card-2'],
    images.cards['card-1'],
    images.cards.card0,
    images.cards.card1,
    images.cards.card2,
    images.cards.card3,
    images.cards.card4,
    images.cards.card5,
    images.cards.card6,
    images.cards.card7,
    images.cards.card8,
    images.cards.card9,
    images.cards.card10,
    images.cards.card11,
    images.cards.card12,
  ];

  return cardArray[card + 2];
};

export default imageSelect;
