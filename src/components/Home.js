import React from 'react';
import styled, {keyframes} from "styled-components"
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


import banner1 from './../img/carrocel/1.png'
import banner2 from './../img/carrocel/2.png'
import banner3 from './../img/carrocel/3.png'

const DivContainerHome = styled.div `
    width: 100%;
    display:flex;
     justify-content: start;
    flex-direction: column;
`
const DivSlider = styled.div`
  width: auto;
  height: 30vw;
  text-align: center;
  overflow:hidden;
`

const movimentar = keyframes`
    0%{
      transform: translateX(0);
    }
    15%{
      transform: translateX(-0%);
    }
    25%{
      transform: translateX(-0%);
    }
    40%{
      transform: translateX(-25%);
    }
    50%{
      transform: translateX(-25%);
    }
    65%{
      transform: translateX(-50%);
    }
    75%{
      transform: translateX(-50%);
    }
    90%{
      transform: translateX(-75%);
    }
    100%{
      transform: translateX(-75%);
    }
`
const DivImagens = styled.div`
width: 400vw;
    height: 100%;
    display: flex;

          animation-name: ${movimentar};
            animation-duration: 15s;
            animation-direction: normal;
            animation-iteration-count: infinite;
            animation-timing-function:cubic-bezier(0,0,1,1);
  div{
    width: 100vw;
    height: 100%;
    background-size:100% 100%;
  }
  div:nth-child(1) {
    background-image: url(${banner1});
  }
  div:nth-child(2) {
    background-image: url(${banner2});
}
div:nth-child(3) {
  background-image: url(${banner3});
}
div:nth-child(4) {
  background-image: url(${banner1});
}
`
export default class Home extends React.Component{
    state = {
        produtos: [
        {
            id:1,
            name: "Multi-espaço",
            value: 149,
            imgUrl: camisa1,
            tamanho: ""
          },
          {
            id:2,
            name:  "Galáxia",
            value: 125,
            imgUrl: camisa2,
            tamanho: ""
          },
          {
            id:3,
            name:  "Multi-espaço manga-longa",
            value: 200,
            imgUrl: camisa3 ,
            tamanho: ""
          },
          {
            id:4,
            name:  "Perdidos no espaço",
            value: 132,
            imgUrl: camisa4 ,
            tamanho: ""
          },
          {
            id:5,
            name: "Volta ao mundo",
            value: 116,
            imgUrl: camisa5 ,
            tamanho: ""
          },
          {
            id:6,
            name:  "Hello!",
            value: 100,
            imgUrl: camisa6 ,
            tamanho: ""
          },
          {
            id:7,
            name:  "Ready for Aliens 1",
            value: 200,
            imgUrl: camisa7 ,
            tamanho: ""
          },
          {
            id:8,
            name:  "Balanço",
            value: 100,
            imgUrl: camisa8 ,
            tamanho: ""
          },
          {
            id:9,
            name: "Escavação lunar",
            value: 99,
            imgUrl: camisa9 ,
            tamanho: ""
          },
          {
            id:10,
            name:  "Resgate",
            value: 89,
            imgUrl: camisa10 ,
            tamanho: ""
          },
          {
            id:11,
            name:  "Ready for Aliens 2",
            value: 200,
            imgUrl: camisa11 ,
            tamanho: ""
          },
          {
            id:12,
            name:  "Don’t believe in you either",
            value: 100,
            imgUrl: camisa12 ,
            tamanho: ""
          },
          {
            id:13,
            name: "Gato galático",
            value: 99,
            imgUrl: camisa13 ,
            tamanho: ""
          },
          {
            id:14,
            name:  "I love space",
            value: 10,
            imgUrl: camisa14 ,
            tamanho: ""
          },
          {
            id:15,
            name:  "Of space",
            value: 200,
            imgUrl: camisa15 ,
            tamanho: ""
          },
          {
            id:16,
            name:  "Pesca lunar",
            value: 100,
            imgUrl: camisa16 ,
            tamanho: ""
          },
          {
            id:17,
            name: "Balanço na lua minguante",
            value: 32,
            imgUrl: camisa17, 
            quantidade: 0,
            tamanho: ""
          },
          {
            id:18,
            name:  "Grama na lua",
            value: 10,
            imgUrl: camisa18 ,
            tamanho: ""
          },
          {
            id:19,
            name:  "Light space",
            value: 200,
            imgUrl: camisa19 ,
            tamanho: ""
          },
          {
            id:20,
            name:  "Laika",
            value: 100,
            imgUrl: camisa20 ,
            tamanho: ""
          },
          {
            id:21,
            name: "Astronauta em chamas",
            value: 32,
            imgUrl: camisa21 ,
            tamanho: ""
          },
          {
            id:22,
            name:  "ET wars",
            value: 10000,
            imgUrl: camisa22 ,
            tamanho: ""
          },
          {
            id:23,
            name:  "Demon",
            value: 200,
            imgUrl: camisa23,
            tamanho: ""
          },
          {
            id:24,
            name:  "Cérebro abduzido",
            value: 100,
            imgUrl: camisa24,
            tamanho: ""
          }
        ],
        carrinho: [],
        valorMinimo: 0,
        valorMaximo: 1000,
        valorNome: "",
        ordenacao: "",
        quantidadeTotalProdutos: ""
    }

     componentDidMount() {
    
      if(localStorage.getItem("Carrinho")){
             this.setState({
                 carrinho: JSON.parse(localStorage.getItem("Carrinho"))
             })
              
         }
         else{
              localStorage.setItem("Carrinho", JSON.stringify(this.state.carrinho))
         }
     }
     componentDidUpdate() {
         localStorage.setItem("Carrinho", JSON.stringify(this.state.carrinho))
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
      this.state.produtos.forEach((item) => {
             if(item.id === id){
               if(item.tamanho){
                const produtoComprar = {
                  produtoId: item.id,
                  produtoName: item.name,
                  produtoValue: item.value,
                  produtoTamanho: item.tamanho
                }
                this.alterarCarrinho(produtoComprar);
             }
             else{
                alert("Escolha um tamanho para a camisa que deseja");
             }
            }
      })
    }
      alterarCarrinho(produto) {
      let carrinho = [... this.state.carrinho];
      let quantidade;
      let entrouNoIf = false;
        for(let i=0; i < carrinho.length ; i++) {
         quantidade = carrinho[i].quantidade;
         produto.quantidade = carrinho[i].quantidade;
            if(JSON.stringify(produto) === JSON.stringify(carrinho[i])){
              carrinho = [... this.state.carrinho];
              carrinho[i].quantidade = quantidade + 1;
              this.setState({carrinho: carrinho});
              localStorage.setItem("Carrinho", JSON.stringify(this.state.carrinho))
              entrouNoIf = true;
            }  
        }
        if(!entrouNoIf){
            produto.quantidade = 1;
            carrinho.push(produto);
            this.setState({carrinho: [... this.state.carrinho, produto]});
            localStorage.setItem("Carrinho", JSON.stringify(this.state.carrinho))
           
        }
      // console.log(carrinho )
  
    }
    
    mudarTamanho = (id, tamanho) => {
       let produtos = [... this.state.produtos];
      // console.log(produtos[index], id)
      
      this.state.produtos.forEach((item) => {
       if(item.id === id){
        item.tamanho = tamanho;
        //  alert(tamanho)
        this.setState({produtos: [... produtos]});
          // console.log(this.state.produtos)
       }
      })
    }
    quantidadeProdutos = () => {
      let quantidade = 0, stringQuantidade= ""; 
      (this.state.carrinho).forEach((item) => {
          if(item.quantidade > 0){ 
              quantidade += item.quantidade;
          }            
      })
      if(quantidade <= 0){
        stringQuantidade = "";
      }
      else if(quantidade > 0 && quantidade < 100){
        stringQuantidade = `${quantidade}`;
      }
      else{
        stringQuantidade = `99+`;
      }
      return stringQuantidade;
  }
  sliderTopo = () => {
    return (<DivSlider>
      <DivImagens>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </DivImagens>
  </DivSlider>
  )
  }
    render(){

        return (<DivContainerHome>
          {this.sliderTopo()}
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
           quantidadeProdutos = {this.quantidadeProdutos}
           />
            <Produtos
            produtos = {this.state.produtos}
            produto = {this.state.produtos}
            valorMinimo ={this.state.valorMinimo}
            valorMaximo ={this.state.valorMaximo}
            valorNome = {this.state.valorNome}
            compraProduto = {this.compraProduto}
            quantidadeProdutos = {this.quantidadeProdutos}
            mudarTamanho= {this.mudarTamanho}
             ordenacao = {this.state.ordenacao}

            >
            </Produtos>
        </DivContainerHome>)
    }
}