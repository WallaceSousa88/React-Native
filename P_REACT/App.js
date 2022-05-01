import { StatusBar, StyleSheet, Text, SafeAreaView, Image, View, ScrollView } from 'react-native';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Topo from './source/telas/Carrinho/Topo';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mocks from './source/mocks/carrinho';
import Itens from './source/telas/Carrinho/Itens';

export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Topo {...Mocks.topo} />
      <Detalhes {...Mocks.detalhes} />
      <Itens {...Mocks.itens} />

      <StatusBar />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});