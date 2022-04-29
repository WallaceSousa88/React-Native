import { StatusBar, StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Topo from './source/telas/Carrinho/Topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Topo/>
      <Detalhes/>

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});