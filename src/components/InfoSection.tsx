import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';
import InfoDisplay from './InfoDisplay';
import { MAXTURNS } from '../helper/deckHelper';

const InfoSection = () => {
  const playerCards = useSelector((state: RootState) => state.cards.playerCards);
  const turnNumber = useSelector((state: RootState) => state.gameInfo.turnNumber);

  const [score, setScore] = useState(0);

  useEffect(() => {
    let sum = 0;
    playerCards.forEach(column => {
      column.forEach(card => {
        if (card.visible) {
          sum += card.value;
        }
      });
    });
    setScore(sum);
  }, [playerCards, setScore]);

  return (
    <View className="flex flex-row items-center justify-between px-8 mt-8">
      <InfoDisplay title={'Turn'} info={turnNumber} />
      <InfoDisplay title={'Points'} info={score} />
      <InfoDisplay title={'Turns left'} info={MAXTURNS - turnNumber} />
    </View>
  );
};

export default InfoSection;
