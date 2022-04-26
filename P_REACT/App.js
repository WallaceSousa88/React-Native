import { StatusBar, StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import topo from './assets/assets/topo.png'

const width = Dimensions.get('screen').width;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.topo} source={topo} />
      <Text style={styles.tituloCarrinho}>Carrinho</Text>
      <Text>Detalhes do carrinho</Text>
      <Text>Kit IoT</Text>
      <Text>Nome do Vendedor</Text>
      <Text>Um kit IoT que revoluciona a vida dos estudantes</Text>
      <Text>R$ 99,00</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topo:{
    width:"100%",
    height:582/772 * width
  },
  tituloCarrinho:{
    position:'absolute',
    paddingVertical: 60,
    textAlign:"center",
    width:'100%',
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40
  }
});