import topo from '../../assets/assets/topo.png'
import logoVendedor from '../../assets/assets/logo.png';

import antena2g from "../../assets/assets/Itens/antena2g3g.png";
import antenaWifi from "../../assets/assets/Itens/antenaWifi.png";
import modem from "../../assets/assets/Itens/modem.png";
import node from "../../assets/assets/Itens/nodeMcu.png";
import Imagem1 from "../../assets/assets/Itens/Imagem1.png";
import Imagem2 from "../../assets/assets/Itens/Imagem2.png";
import Imagem3 from "../../assets/assets/Itens/Imagem3.png";
import Imagem4 from "../../assets/assets/Itens/Imagem4.png";

const carrinho ={
    topo:{
        titulo:"Carrinhos",
        imagem: topo,
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto:"Kit IoT",
        descricao:"Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor:logoVendedor,
        nomeVendedor:"Nuven's Shopping",
        preco:"R$ 99,00",
    },
    itens:{
        titulo:"Itens do Carrinho",
        lista:[
            {
                nome:"Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome:"Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome:"Modem",
                imagem: modem,
            },
            {
                nome:"Node MCU",
                imagem: node,
            },
        ]
    },
    paraEntregar:{
        titulo:"Novos itens",
        lista:[
            {
                nome:"Imagem1",
                imagem: Imagem1,
            },
            {
                nome:"Imagem2",
                imagem: Imagem2,
            },
            {
                nome:"Imagem3",
                imagem: Imagem3,
            },
            {
                nome:"Imagem4",
                imagem: Imagem4,
            },
        ]
    },
}

export default carrinho;