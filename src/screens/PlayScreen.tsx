import { Pressable, SafeAreaView, Text } from 'react-native';
import CardWrapper from '../components/CardWrapper';
import StackSection from '../components/StackSection';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import colSameValVisible from '../helper/compareHelper';
import { dropColumn, turnAll } from '../redux/slices/cardSlice';
import { RootState } from '../redux/store';
import { setSelected, setXray } from '../redux/slices/gameSlice';
import InfoSection from '../components/InfoSection';
import { MAXTURNS } from '../helper/deckHelper';
import EndSection from '../components/EndSection';
import { SafeViewAndroid } from '../styles/SafeViewAndroid';

export const PlayScreen = () => {
  const dispatch = useDispatch();
  const playerCards = useSelector((state: RootState) => state.cards.playerCards);
  const freeTurns = useSelector((state: RootState) => state.gameInfo.freeTurnover);
  const turnNumber = useSelector((state: RootState) => state.gameInfo.turnNumber);

  const [clickCount, setClickCount] = useState(0);
  const [allTurned, setAllTurned] = useState(false);

  const handleCheat = () => {
    setClickCount(clickCount + 1);
    if (clickCount > 8) dispatch(setXray());
  };

  useEffect(() => {
    const columnToBeDropped = colSameValVisible(playerCards);
    if (columnToBeDropped != -1) {
      setTimeout(() => {
        dispatch(dropColumn(columnToBeDropped));
      }, 500);
    }
  }, [playerCards]);

  useEffect(() => {
    if (!freeTurns) dispatch(setSelected('idle'));
  }, [freeTurns]);

  useEffect(() => {
    if (!(MAXTURNS - turnNumber)) {
      setTimeout(() => {
        dispatch(turnAll());
      }, 1000);
    }
  }, [turnNumber]);

  useEffect(() => {
    setAllTurned(
      playerCards.every(column => column.every(card => card.visible === true))
    );
  }, [playerCards]);

  return (
    <SafeAreaView className="flex-1" style={SafeViewAndroid.AndroidSafeArea}>
      <Pressable onPress={() => handleCheat()}>
        <Text className="mb-12 text-6xl text-center font-wide text-neutral-800">
          SKRRR
        </Text>
      </Pressable>
      <CardWrapper />
      <InfoSection />
      {!allTurned && MAXTURNS - turnNumber > 0 ? <StackSection /> : <EndSection />}
    </SafeAreaView>
  );
};
