import { Image, TouchableOpacity } from 'react-native';
import imageSelect from '../helper/cardImageHelper';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../redux/slices/gameSlice';
import { setShownCard } from '../redux/slices/cardSlice';

const DrawPile = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.gameInfo.selected);
  const shownDrawnCard = useSelector((state: RootState) => state.cards.shownDrawCard);

  const handlePress = () => {
    if (selected === 'idle') {
      dispatch(setSelected('draw'));
      dispatch(setShownCard('new'));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      activeOpacity={selected === 'idle' ? 0.5 : 1}
    >
      <Image
        source={imageSelect(shownDrawnCard ? shownDrawnCard.value : null)}
        style={{ width: 72, height: 111 }}
        className={selected == 'draw' ? 'scale-125' : ''}
      />
    </TouchableOpacity>
  );
};

export default DrawPile;
