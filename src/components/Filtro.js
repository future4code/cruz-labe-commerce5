import React from 'react';
import styled from "styled-components"
import carrinho from './../img/shopping-cart_icon-icons.com_69460.ico'
import setaCima from './../img/sharp_north_black_24dp.png'
import setaBaixo from './../img/sharp_south_black_24dp.png'
import pesquisa from './../img/pesquisa.ico'
import fundo from './../img/background.jpg'

const DivContainerFiltro = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    background-image: url(${fundo});
    padding: 30px 0px;
    color: black;
    font-weight: 700;

    input, select, option{
        border: solid 1px #bd87f5;
        font-size: 18px;
        padding: 10px;
    margin: 5px;
    border-radius: 10px;
    :focus {
        outline: 0;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
}
    }
    
   
`
const DivInputs = styled.div `
    flex-direction: row;
    justify-content: space-evenly;
 
`

const InputBusca = styled.input`
    width: 400px;
`

const InputValor = styled.input`
    width: 75px;
`
const ImgIcone = styled.img`
    width: 18px;
    top: 3px;
`
const ImgPesquisa = styled.img`
    width: 18px;
    left: -30px;
    top: 3px;
    position: relative;
    cursor: pointer;
    opacity: 0.7;
    :hover{
        opacity: 1;
    }
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

class Filtro extends React.Component {

    render() {
        return (
            <DivContainerFiltro>
            <DivInputs> 
            <InputBusca onChange={this.props.handleNome} value ={this.props.valorNome} placeholder="Buscar produto..." type="text">
            </InputBusca>
            <ImgPesquisa src={pesquisa}/>
            <InputValor onChange={this.props.handleMinimo} value={this.valorMinimo} placeholder="Min" type={"number"}/>
            <ImgIcone src={setaBaixo}/>
            <InputValor onChange={this.props.handleMaximo} value={this.props.valorMaximo} placeholder="Máx" type="number"/>
            <ImgIcone src={setaCima}/>
           
           

                <label>
                Ordenar por: </label>
                <select value={this.props.ordenacao} onChange={this.props.mudarOrdenacao}>
                <option value={''}>Destaques</option>
                <option value={'CRESCENTE'}>Preço: baixo a alto</option>
                <option value={'DECRESCENTE'}>Preço: alto a baixo</option>
                   </select>
            </DivInputs>
            <BotaoCarrinho onClick={this.props.mudarPagina} src={carrinho}></BotaoCarrinho>
            </DivContainerFiltro>
        )
    }

}
export default Filtro;