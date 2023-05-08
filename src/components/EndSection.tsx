import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetCards } from '../redux/slices/cardSlice';
import { resetGame } from '../redux/slices/gameSlice';

const EndSection = () => {
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(resetGame());
    dispatch(resetCards());
  };

  return (
    <View className="flex-row items-center justify-center flex-1">
      <TouchableOpacity
        className="p-4 border-4 border-neutral-600 rounded-xl"
        onPress={() => restart()}
      >
        <Text className="text-3xl font-wide text-neutral-800">PLAY AGAIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EndSection;
