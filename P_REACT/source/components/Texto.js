import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({children, style}){
    let estilo = estilos;
    if(style?.fontWeight === "bold"){
        estilo = textoNegrito;
    }
    return <Text style={[style, estilo]} > {children} </Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily:"Montserrat_400Regular",
        fontWeight:"normal",
    },
    textoNegrito:{
        fontFamily:"Montserrat_700Bold",
        fontWeight:"normal",
    }
})