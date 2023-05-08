import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface InfoDisplayProps {
  title: string;
  info: string | number;
}

const InfoDisplay = ({ title, info }: InfoDisplayProps) => {
  const turnNumber = useSelector((state: RootState) => state.gameInfo.turnNumber);

  return (
    <View className="flex items-center flex-1">
      <Text className="font-sans text-2xl text-center text-neutral-600">
        {title.toUpperCase()}
      </Text>
      <Text className="text-3xl text-neutral-800 font-wide">{info}</Text>
    </View>
  );
};

export default InfoDisplay;
