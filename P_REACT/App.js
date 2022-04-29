import { StatusBar, StyleSheet, Text, SafeAreaView, Image, View } from 'react-native';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Topo from './source/telas/Carrinho/Topo';

export default function App() {
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