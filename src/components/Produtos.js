import React from 'react';
import styled from "styled-components"

const DivContainerProdutos = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
 align-self: center;
`

const DivProduto = styled.div`
    margin: 20px;
    width: 200px;
    
  img{
        width: 200px;
        height: 200px;
    }
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        margin: 0px;
        text-align: center;
    }
    h4{
        margin: 0px;
        text-align: center;
    }
    button{
        width: 100%;
        padding: 10px 0px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 5px;
        background-color:  #c5aae9;
            color: black;
        :hover{
            background-color: rgba(48,8,111,1);
            color: white;
        }
    }
`

class Produtos extends React.Component {
filtrarProdutos = () => {
    if(this.props.ordenacao){
    return this.props.produto
    .filter((produto) => this.props.valorMaximo ? produto.value < this.props.valorMaximo : true)
    .filter((produto) => this.props.valorMinimo ? produto.value > this.props.valorMinimo : true)
    .filter((produto) => this.props.valorNome ? (produto.name.toUpperCase()).includes(this.props.valorNome.toUpperCase()) : true)
    .sort((a, b) => this.props.ordenacao === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
    }
    else{
        return this.props.produto
        .filter((produto) => this.props.valorMaximo ? produto.value < this.props.valorMaximo : true)
    .filter((produto) => this.props.valorMinimo ? produto.value > this.props.valorMinimo : true)
    .filter((produto) => this.props.valorNome ? (produto.name.toUpperCase()).includes(this.props.valorNome.toUpperCase()) : true)
    }
}



render() {
    const listaFiltrada = this.filtrarProdutos()
    return (
            <DivContainerProdutos>
                
            {listaFiltrada.map((item) => {
                return (<DivProduto>
                            <img src={item.imgUrl}/>
                             <h3>{item.name}</h3>
                             <h4>R$ {item.value}</h4>
                             <button onClick={() => this.props.compraProduto(item.id)}>Comprar</button>  
                         </DivProduto>)})
            }
            </DivContainerProdutos>
    )
}

}

export default Produtos;