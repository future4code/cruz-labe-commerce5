import React from 'react';
import styled from "styled-components"

const DivContainer = styled.div`
    height:85vh;
    width: 100vw;
    display:flex;
     justify-content: start;
    flex-direction: column;
`

const DivTopo = styled.div`
   height: 8vh;
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    /* background-color: blue; */
`
const BotaoCarrinho = styled.button`
height: 50px;
width: 80px;
`
const ListaProdutos = styled.div`
 display: flex;
 flex-direction:column;
 text-align: center;
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


const produtosInicial = JSON.parse(localStorage.getItem("Produtos"))

export default class Carrinho extends React.Component {
   
    state = {
        produtos: produtosInicial,
    }
    atualizarValor = () => {
        let valor = 0; 
        console.log("C", valor);
        (this.state.produtos).forEach((item) => {
            if(item.quantidade > 0){ 
                valor += item.value * item.quantidade;
            }            
        })
       
        return valor;
        // 
    } 

    componentWillMount() {
        this.setState({
            produtos: JSON.parse(localStorage.getItem("Produtos")),
          
        })
        this.setState({
            valorTotal:this.atualizarValor()
        })
    }
    addProduto(id){
        const produtos = this.state.produtos;

        produtos.forEach((item, index) => {
             if(item.id === id){
             let produtosAtualizado = [...this.state.produtos];
                produtosAtualizado[index].quantidade =  produtosAtualizado[index].quantidade + 1;
                this.setState({produtos: produtosAtualizado,
                    valorTotal: this.atualizarValor()
                })
             }
        })
        // console.log(this.state.produtos);
        localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
    }
  
    tirarProduto(id){
        const produtos = this.state.produtos;

        produtos.forEach((item, index) => {
             if(item.id === id){
             let produtosAtualizado = [...this.state.produtos];
                produtosAtualizado[index].quantidade =  produtosAtualizado[index].quantidade - 1;
                this.setState({produtos: produtosAtualizado,
                    valorTotal: this.atualizarValor()
                })
             }
        })
        // console.log(this.state.produtos);
        localStorage.setItem("Produtos", JSON.stringify(this.state.produtos))
    }
    
    listaProdutos = () =>{
        const produtos = (this.state.produtos).map((item) => {
            if(item.quantidade > 0){ 
                return (<DivProdutoCarrinho>
                <div>
                    <DivQuantidade>
                        <button onClick={() => this.addProduto(item.id)}>+</button>
                        <h3>{item.quantidade}</h3>
                        <button onClick={() => this.tirarProduto(item.id)}>-</button>
                    </DivQuantidade>
                    <h3>{item.name}</h3>
                </div>
                <DivValor><h3>R$ {item.value}</h3></DivValor>
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
                <BotaoCarrinho onClick={this.props.mudarPagina}>Home</BotaoCarrinho>
            </DivTopo>
            <ListaProdutos>
                <h2>Lista de compras</h2>
                {this.listaProdutos()}   
             <DivProdutoCarrinho>
                        <div>
                            <h3>Total</h3>
                        </div>
                        <DivValor><h3>R$ {this.state.valorTotal}</h3></DivValor>
                    </DivProdutoCarrinho>

            </ListaProdutos>
        </DivContainer>)
    }
}