import * as Font from 'expo-font';
import { useState } from 'react';
// Redux
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import { PlayScreen } from './src/screens/PlayScreen';

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Play"
            component={PlayScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
