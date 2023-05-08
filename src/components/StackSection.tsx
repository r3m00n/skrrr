import { View } from 'react-native';
import DiscardPile from './DiscardPile';
import DrawPile from './DrawPile';
import Promt from './Promt';

const StackSection = () => {
  return (
    <View
      className={'flex flex-row items-center justify-between w-full px-8 mt-auto mb-8'}
    >
      <DiscardPile />
      <Promt />
      <DrawPile />
    </View>
  );
};

export default StackSection;
