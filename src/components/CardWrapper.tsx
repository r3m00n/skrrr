import { View } from 'react-native';
import PlayCard from './PlayCard';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const CardWrapper = () => {
  const playerCards = useSelector((state: RootState) => state.cards.playerCards);

  return (
    // TODO: nur eine parent View
    <View className="flex flex-row items-center justify-center pl-4">
      <View className="flex flex-row flex-wrap h-96">
        {playerCards.map((column, index) => {
          return (
            // column
            <View className="flex justify-between h-full mr-4 " key={index}>
              {column.map(card => {
                return <PlayCard key={card.id} card={card} />;
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CardWrapper;
