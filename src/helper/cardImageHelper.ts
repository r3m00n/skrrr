const cardImages = {
  back: require('../assets/cards/back.png'),
  card0: require('../assets/cards/cardn2.png'),
  card1: require('../assets/cards/cardn1.png'),
  card2: require('../assets/cards/card0.png'),
  card3: require('../assets/cards/card1.png'),
  card4: require('../assets/cards/card2.png'),
  card5: require('../assets/cards/card3.png'),
  card6: require('../assets/cards/card4.png'),
  card7: require('../assets/cards/card5.png'),
  card8: require('../assets/cards/card6.png'),
  card9: require('../assets/cards/card7.png'),
  card10: require('../assets/cards/card8.png'),
  card11: require('../assets/cards/card9.png'),
  card12: require('../assets/cards/card10.png'),
  card13: require('../assets/cards/card11.png'),
  card14: require('../assets/cards/card12.png'),
};

const imageSelect = (card: number | null) => {
  if (card === null || card < -2 || card > 12) {
    return cardImages.back;
  }

  return cardImages[`card${(card + 2).toString()}`];
};

export default imageSelect;
