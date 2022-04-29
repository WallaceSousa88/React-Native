import React from "react";
import { StyleSheet, Text, View, Image } from "react-native" ;
import logoVendedor from '../../../assets/assets/logo.png';

export default function Detalhes(){
    return <>
    <Text style={styles.detalhes}>Detalhes do carrinho</Text>
    <Text style={styles.titulo}>Kit IoT</Text>
    <View style={styles.vendedor}>
    <Image style={styles.logoVendedor} source={logoVendedor}/>
    <Text style={styles.nomeVendedor}>Nuvem's Cloud Shopping</Text>
    </View>
    <Text style={styles.desc}>Um kit IoT que revoluciona a vida dos estudantes</Text>
    <Text style={styles.preco}>R$ 99,00</Text>
    </>
    ;
}

const styles = StyleSheet.create ({
    detalhes:{
        color:"black",
        fontWeight:"bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign:"center",
        fontFamily:"Montserrat_700Bold",
    },
    titulo:{
        color:"#ffa500",
        fontWeight:"bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center",
    },
    nomeVendedor:{
        color:"#a3a3a3",
        fontSize: 18,
        lineHeight: 26,
        marginLeft: 10,
      },
    desc:{
        fontSize: 16,
        paddingVertical: 10,
    },
    preco:{
        fontSize: 35,
        fontWeight:"bold",
        textAlign:"right",
        paddingHorizontal: 10,
    },
    logoVendedor:{
        width: 32,
        height: 32,
        marginLeft: 30,
    },
    vendedor:{
        flexDirection:"row",
        padding: 10,
    }
})