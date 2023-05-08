import { Image, TouchableOpacity } from 'react-native';
import imageSelect from '../helper/cardImageHelper';
import { Card } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNewDisgardCard,
  placeCard,
  setShownCard,
  turnCard,
} from '../redux/slices/cardSlice';
import { addTurn, setSelected, turnFree } from '../redux/slices/gameSlice';
import { RootState } from '../redux/store';

const PlayCard = ({ card }: { card: Card }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.gameInfo.selected);
  const discardPile = useSelector((state: RootState) => state.cards.discardPile);
  const freeTurns = useSelector((state: RootState) => state.gameInfo.freeTurnover);
  const shownDrawCard = useSelector((state: RootState) => state.cards.shownDrawCard);
  const xray = useSelector((state: RootState) => state.gameInfo.xray);

  const prepareTurn = () => {
    dispatch(setShownCard(null));
    dispatch(setSelected('idle'));
    dispatch(getNewDisgardCard('new'));
    dispatch(addTurn());
  };

  const handlePress = () => {
    if (!card.visible && freeTurns && (selected == 'start' || selected == 'flip')) {
      dispatch(turnCard(card.id));
      if (selected == 'flip') prepareTurn();
      dispatch(turnFree());
    }
    // TODO: zusammenfassen
    if (selected == 'discard') {
      dispatch(
        // FIXME: remove top card from Discard Pile
        placeCard({ newCard: discardPile[discardPile.length - 1], oldCard: card })
      );
      prepareTurn();
    }
    if (selected == 'draw') {
      dispatch(placeCard({ newCard: shownDrawCard!, oldCard: card }));
      prepareTurn();
    }
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      activeOpacity={selected !== 'idle' && !card.visible ? 0.5 : 1}
    >
      <Image
        source={imageSelect(card.visible ? card.value : null)}
        style={{ width: 72, height: 111 }}
        className={`${card.value < 1 && xray && !card.visible && 'scale-105'}`}
      />
    </TouchableOpacity>
  );
};

export default PlayCard;
