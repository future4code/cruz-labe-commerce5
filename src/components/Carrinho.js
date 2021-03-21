import React from 'react';
import styled from "styled-components"
import sair from './../img/cancel-1_icon-icons.com_69552.ico'
import add from  './../img/round_add_circle_black_24dp.png'
import remove from  './../img/round_remove_circle_black_24dp.png'

import fundo from './../img/background.jpg'
const DivContainer = styled.div`
    height:85vh;
    width: 100%;
    display:flex;
     justify-content: start;
    flex-direction: column;
`

const DivTopo = styled.div`
   /* height: 8vh; */
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;

    background-attachment: fixed;
    align-items:center;
    background-image: url(${fundo});
    background-attachment: fixed;
    padding: 35px 0px;
    color: black;
    font-weight: 700;
    h2{
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 30px;
        margin: 0px;
        background-color: rgb(256, 256, 256, 0.50);
    }
    /* background-color: blue; */
`


const BotaoCarrinho = styled.img `
height: 70px;
width: 70px;
position: fixed;
cursor: pointer;
bottom: 10px;
right: 10px;
border-radius: 50%;
border: solid  white 2px;
:hover{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(48,8,111,1) 35%, rgba(48,8,111,1) 70%);
    border: solid  rgba(48,8,111,1) 2px;
}
` 
const ListaProdutos = styled.div`
 display: flex;
 flex-direction:column;
 text-align: center;
 width: 700px;
 align-self: center;
 
@media(max-width: 700px) {
    width: 100%;
    
    font-size: 0.9em;
}
`
const DivTotal = styled.div`
 width: 700px;
 align-self: center;    
 display: flex;
 flex-direction:column;
  
@media(max-width: 700px) {
    width: 100%;
    font-size: 0.9em;
}
`
const DivProdutoCarrinho = styled.div`
    /* margin: 10px; */
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    div:first-child{
        display: flex;
    }

`
const DivQuantidade = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        cursor: pointer;
    }
    *{
        margin: 5px;
    }
`

const DivValor = styled.div`
    height: 25px;
    margin-right: 10px;
 `

const ButaoFinalizar = styled.button`
    width: 200px;
    padding: 10px 0px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #c5aae9;
    color: black;
    margin: auto;
    align-self: center;
    margin-bottom: 25px;
    :hover{
        background-color: rgba(48,8,111,1);
        color: white;
    }
`

const IconePlusRemove = styled.img`
width: 25px;
cursor: pointer;
`
const MensagemCentralizada = styled.div`
display: flex;
justify-content: center;
align-items: center;
    font-size: 50px;
`
const carrinhoInicial = JSON.parse(localStorage.getItem("Carrinho"))


export default class Carrinho extends React.Component {
   
    state = {
        carrinho: carrinhoInicial,
        finalizado: false
    }
    atualizarValor = () => {
        let valor = 0; 
        (this.state.carrinho).forEach((item) => {
            if(item.quantidade > 0){ 
                valor += item.produtoValue * item.quantidade;
            }            
        })
       
        return valor;
        // 
    } 

    componentWillMount() {
        this.setState({
            carrinho: JSON.parse(localStorage.getItem("Carrinho"))
        })
    }
    addTirarProduto(id, index, AddOuTirar){
        const carrinho = this.state.carrinho;
      
        if(carrinho[index].produtoId == id){
            let carrinhoAtualizado = [...this.state.carrinho];
            (AddOuTirar === "Add") ?   carrinhoAtualizado[index].quantidade++ : carrinhoAtualizado[index].quantidade--;
            console.log(carrinhoAtualizado)
            carrinhoAtualizado[index].quantidade <= 0 && carrinhoAtualizado.splice(index, 1);
            this.setState({carrinho: carrinhoAtualizado})
            console.log(carrinhoAtualizado)
        }
        localStorage.setItem("Carrinho", JSON.stringify(this.state.carrinho))
    }
    mostraBotaoFinalizar(){
        if(this.atualizarValor()){
            return (<DivTotal>
                 <DivProdutoCarrinho>
                        <div>
                            <h3>Total</h3>
                        </div>
                        <DivValor><h3>R$ {this.atualizarValor()},00</h3></DivValor>
                    </DivProdutoCarrinho>
         
                
                <ButaoFinalizar onClick={this.finalizaCompras}>Finalizar Compras</ButaoFinalizar> 
                </DivTotal>
            )
        }
        else {
             return (<MensagemCentralizada>Seu carrinho esta vazio</MensagemCentralizada>);
             
    }
    }
    finalizaCompras = () => {
        localStorage.setItem("Carrinho", JSON.stringify([]));
        
        this.setState({carrinho: JSON.parse(localStorage.getItem("Carrinho"))});
        console.log(localStorage.getItem("Carrinho"))
        alert("Obrigado por comprar conosco");
    }
    listaProdutos = () =>{
        const produtos = (this.state.carrinho).map((item, index) => {
            if(item.quantidade > 0){ 
                return (<DivProdutoCarrinho>
                <div>
                    <DivQuantidade>
                        <IconePlusRemove onClick={() => this.addTirarProduto(item.produtoId, index, "Add")} src={add}></IconePlusRemove>
                        <h3>{item.quantidade}</h3>
                        <IconePlusRemove onClick={() => this.addTirarProduto(item.produtoId, index, "Tirar")} src={remove}></IconePlusRemove>
                    </DivQuantidade>
                    <h3>{item.produtoName} - {item.produtoTamanho}</h3>
                </div>
                <DivValor><h3>R$ {item.produtoValue},00</h3></DivValor>
                
            </DivProdutoCarrinho>)
            }
            else {
                return ("")
            }
            
        })
        return produtos;
        // 
    }
   
    render() {
        return (<DivContainer >
            <DivTopo>
                   <h2>Lista de compras</h2>
            <BotaoCarrinho onClick={this.props.mudarPagina} src={sair}></BotaoCarrinho>
            </DivTopo> 
            <ListaProdutos>
            
                {this.listaProdutos()}   
            
            </ListaProdutos>
               {this.mostraBotaoFinalizar()}
        </DivContainer>)
    }
}