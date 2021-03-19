import React from 'react';
import styled from "styled-components"
import Filtro from './Filtro.js'
import Produtos from './Produtos.js';
import camisa1 from './../img/camisas/camisa-1.jpg'
import camisa2 from './../img/camisas/camisa-2.jpg'
import camisa3 from './../img/camisas/camisa-3.jpg'
import camisa4 from './../img/camisas/camisa-4.jpg'
import camisa5 from './../img/camisas/camisa-5.jpg'
import camisa6 from './../img/camisas/camisa-6.jpg'
import camisa7 from './../img/camisas/camisa-7.jpg'
import camisa8 from './../img/camisas/camisa-8.jpg'
import camisa9 from './../img/camisas/camisa-9.jpg'
import camisa10 from './../img/camisas/camisa-10.jpg'
import camisa11 from './../img/camisas/camisa-11.jpg'
import camisa12 from './../img/camisas/camisa-12.jpg'
import camisa13 from './../img/camisas/camisa-13.png'
import camisa14 from './../img/camisas/camisa-14.png'
import camisa15 from './../img/camisas/camisa-15.png'
import camisa16 from './../img/camisas/camisa-16.png'
import camisa17 from './../img/camisas/camisa-17.png'
import camisa18 from './../img/camisas/camisa-18.png'
import camisa19 from './../img/camisas/camisa-19.png'
import camisa20 from './../img/camisas/camisa-20.png'
import camisa21 from './../img/camisas/camisa-21.png'
import camisa22 from './../img/camisas/camisa-22.jpg'
import camisa23 from './../img/camisas/camisa-23.jpg'
import camisa24 from './../img/camisas/camisa-24.png'

const DivContainerHome = styled.div `
    height:85vh;
    width: 100vw;
    display:flex;
     justify-content: start;
    flex-direction: column;
`

export default class Home extends React.Component{
    state = {
        produtos: [
        {
            id:1,
            name: "Multi-espaço",
            value: 149,
            imgUrl: camisa1,
            quantidade: 0
          },
          {
            id:2,
            name:  "Galáxia",
            value: 125,
            imgUrl: camisa2,
            quantidade: 0
          },
          {
            id:3,
            name:  "Multi-espaço manga-longa",
            value: 200,
            imgUrl: camisa3,
            quantidade: 0
          },
          {
            id:4,
            name:  "Perdidos no espaço",
            value: 132,
            imgUrl: camisa4,
            quantidade: 0
          },
          {
            id:5,
            name: "Volta ao mundo",
            value: 116,
            imgUrl: camisa5,
            quantidade: 0
          },
          {
            id:6,
            name:  "Hello!",
            value: 100,
            imgUrl: camisa6,
            quantidade: 0
          },
          {
            id:7,
            name:  "Ready for Aliens 1",
            value: 200,
            imgUrl: camisa7,
            quantidade: 0
          },
          {
            id:8,
            name:  "Balanço",
            value: 100,
            imgUrl: camisa8,
            quantidade: 0
          },
          {
            id:9,
            name: "Escavação lunar",
            value: 99,
            imgUrl: camisa9,
            quantidade: 0
          },
          {
            id:10,
            name:  "Resgate",
            value: 89,
            imgUrl: camisa10,
            quantidade: 0
          },
          {
            id:11,
            name:  "Ready for Aliens 2",
            value: 200,
            imgUrl: camisa11,
            quantidade: 0
          },
          {
            id:12,
            name:  "Don’t believe in you either",
            value: 100,
            imgUrl: camisa12,
            quantidade: 0
          },
          {
            id:13,
            name: "Gatto galátictico",
            value: 99,
            imgUrl: camisa13,
            quantidade: 0
          },
          {
            id:14,
            name:  "I love space",
            value: 10,
            imgUrl: camisa14,
            quantidade: 0
          },
          {
            id:15,
            name:  "Of space",
            value: 200,
            imgUrl: camisa15,
            quantidade: 0
          },
          {
            id:16,
            name:  "Pesca lunar",
            value: 100,
            imgUrl: camisa16,
            quantidade: 0
          },
          {
            id:17,
            name: "Balanço na lua minguante",
            value: 32.40,
            imgUrl: camisa17, 
            quantidade: 0
          },
          {
            id:18,
            name:  "Grama na lua",
            value: 10,
            imgUrl: camisa18,
            quantidade: 0
          },
          {
            id:19,
            name:  "Light space",
            value: 200,
            imgUrl: camisa19,
            quantidade: 0
          },
          {
            id:20,
            name:  "Laika",
            value: 100,
            imgUrl: camisa20,
            quantidade: 0
          },
          {
            id:21,
            name: "Astronauta em chamas",
            value: 32.40,
            imgUrl: camisa21,
            quantidade: 0
          },
          {
            id:22,
            name:  "ET wars",
            value: 10000,
            imgUrl: camisa22,
            quantidade: 0
          },
          {
            id:23,
            name:  "Demon",
            value: 200,
            imgUrl: camisa23,
            quantidade: 0
          },
          {
            id:24,
            name:  "Cérebro abduzido",
            value: 100,
            imgUrl: camisa24,
            quantidade: 0
          }
        ],
        valorMinimo: 0,
        valorMaximo: 1000,
        valorNome: "",
        ordenacao: ""
    }

    copararProdutos(produtos, produto) {
        for(const i of produtos) {
           if(JSON.stringify(produto) == JSON.stringify(i)){
                return true;
            }   
        }
        return false;
    }
     componentDidMount() {
    
      if(localStorage.getItem("Produtos")){
             this.setState({
                 produtos: JSON.parse(localStorage.getItem("Produtos"))
             })
         }
         else{
              localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
         }
     }
     componentDidUpdate() {
         localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
    }

    handleMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }

    handleMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    handleNome = (event) => {
        this.setState({valorNome: event.target.value})
    }
    mudarOrdenacao = (event) => {
        this.setState({ordenacao: event.target.value})
    }

    compraProduto = (id) => {
        const produtos = this.state.produtos;
        produtos.forEach((item, index) => {
             if(item.id === id){
             let produtosAtualizado = [...this.state.produtos];
                produtosAtualizado[index].quantidade =  produtosAtualizado[index].quantidade + 1;
                this.setState({produtos: produtosAtualizado})
             }
        })
        console.log(this.state.produtos);
    }

    render(){

        return (<DivContainerHome>
            <Filtro
           valorMinimo = {this.state.valorMinimo}
           valorMaximo = {this.state.valorMaximo}
           valorNome = {this.state.valorNome}
           ordenacao = {this.state.ordenacao}
           handleMaximo = {this.handleMaximo}
           handleMinimo = {this.handleMinimo}
           handleNome = {this.handleNome}
           mudarOrdenacao = {this.mudarOrdenacao}
           mudarPagina = {this.props.mudarPagina}
           />
            <Produtos
            produto = {this.state.produtos}
            valorMinimo ={this.state.valorMinimo}
            valorMaximo ={this.state.valorMaximo}
            valorNome = {this.state.valorNome}
            compraProduto = {this.compraProduto}
            
           ordenacao = {this.state.ordenacao}
            >
            </Produtos>
        </DivContainerHome>)
    }
}