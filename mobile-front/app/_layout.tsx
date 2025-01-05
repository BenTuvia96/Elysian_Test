import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <LoginScreen />;
}
