import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Promt = () => {
  const selected = useSelector((state: RootState) => state.gameInfo.selected);
  const freeTurns = useSelector((state: RootState) => state.gameInfo.freeTurnover);

  const [promtText, setPromptText] = useState<string>('');

  useEffect(() => {
    switch (selected) {
      case 'start':
        setPromptText(`TURN ${freeTurns} CARD${freeTurns > 1 ? 'S' : ''}`);
        break;
      case 'idle':
        setPromptText('CHOOSE PILE');
        break;
      case 'discard':
      case 'draw':
        setPromptText('CHOOSE CARD');
        break;
    }
  }, [selected, freeTurns]);

  return (
    <View>
      <Text className="text-xl font-wide text-neutral-800">YOUR TURN</Text>
      <View
        className={`flex flex-row items-center  ${
          selected == 'idle' ? 'mr-1 justify-between' : 'justify-center'
        }`}
      >
        <Image
          source={require('../assets/icons/arrow.png')}
          style={{ width: 8, height: 12 }}
          className={selected == 'idle' ? 'ml-1' : 'hidden'}
        />
        <Text className="font-sans text-xl text-neutral-600">{promtText}</Text>
        <Image
          source={require('../assets/icons/arrow.png')}
          style={{ width: 8, height: 12 }}
          className={selected == 'idle' ? 'mr-1 rotate-180' : 'hidden'}
        />
      </View>
    </View>
  );
};

export default Promt;
