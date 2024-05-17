import * as Font from 'expo-font';
import { useState } from 'react';
// Redux
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
// Screens
import { PlayScreen } from './src/screens/PlayScreen';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      MonaSansBlackWide: require('./src/assets/fonts/Mona-Sans-BlackWide.ttf'),
      MonaSansExtraBoldNarrow: require('./src/assets/fonts/Mona-Sans-ExtraBoldNarrow.ttf'),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    loadFonts();
    return null;
  }

  return (
    <Provider store={store}>
      <PlayScreen />
    </Provider>
  );
}
