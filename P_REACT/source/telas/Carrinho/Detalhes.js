import React from "react";
import { StyleSheet, Text, View, Image } from "react-native" ;
import logoVendedor from '../../../assets/assets/logo.png';
import Texto from "../../components/Texto";

export default function Detalhes(){
    return <>
    <Texto style={styles.detalhes}>Detalhes do carrinho</Texto>
    <Texto style={styles.titulo}>Kit IoT</Texto>
    <View style={styles.vendedor}>
    <Image style={styles.logoVendedor} source={logoVendedor}/>
    <Texto style={styles.nomeVendedor}>Nuvem's Cloud Shopping</Texto>
    </View>
    <Texto style={styles.desc}>Um kit IoT que revoluciona a vida dos estudantes</Texto>
    <Texto style={styles.preco}>R$ 99,00</Texto>
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