import { Image, TouchableOpacity } from 'react-native';
import imageSelect from '../helper/cardImageHelper';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { addTurnover, setSelected } from '../redux/slices/gameSlice';
import { getNewDisgardCard } from '../redux/slices/cardSlice';

const DiscardPile = () => {
  const dispatch = useDispatch();
  const discardPile = useSelector((state: RootState) => state.cards.discardPile);
  const selected = useSelector((state: RootState) => state.gameInfo.selected);

  const handlePress = () => {
    if (selected === 'idle') {
      dispatch(setSelected('discard'));
    }
    if (selected === 'draw') {
      dispatch(getNewDisgardCard('draw'));
      dispatch(setSelected('flip'));
      dispatch(addTurnover());
    }
    if (selected === 'discard') {
      dispatch(setSelected('idle'));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      activeOpacity={selected === 'idle' || selected === 'draw' ? 0.5 : 1}
    >
      <Image
        source={imageSelect(discardPile[discardPile.length - 1].value)}
        style={{ width: 72, height: 111 }}
        className={selected == 'discard' ? 'scale-125' : ''}
      />
    </TouchableOpacity>
  );
};

export default DiscardPile;
