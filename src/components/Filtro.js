import React from 'react';
import styled from "styled-components"

const DivContainer = styled.div`
    height: 8vh;
    width: 100vw;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
`
const DivInputs = styled.div `
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
`

const InputBusca = styled.input`
margin-right: 5px;
height: 20px;
`

const InputValor = styled.input `
height: 20px;
`

const BotaoCarrinho = styled.button `
height: 50px;
width: 80px;
` 
class Filtro extends React.Component {

    render() {
        return (
            <DivContainer>
            <DivInputs> 
            <h3>Filtros</h3>
            <InputValor onChange={this.props.handleMinimo} value={this.props.valorMinimo} placeholder="Valor mínimo" type="number"/>
            <InputValor onChange={this.props.handleMaximo} value={this.props.valorMaximo} placeholder="Valor máximo" type="number"/>
            <InputBusca onChange={this.props.handleNome} value ={this.props.valorNome} placeholder="Buscar produto..." type="text"/>
            </DivInputs>
            <BotaoCarrinho onClick={this.props.mudarPagina}> Carrinho </BotaoCarrinho>
            </DivContainer>
        )
    }

}
export default Filtro;