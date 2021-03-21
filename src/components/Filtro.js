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
    align-items: center;
    background-image: url(${fundo});
    padding: 30px 0px;
    color: black;
    font-weight: 700;
    background-attachment: fixed;
    flex-wrap: wrap;
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
    
@media(max-width: 650px) {
    padding: 10px 0px;
    background-size: auto 100%;
 }
`
const DivInputs = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 100%;
    label{
        background-color: rgb(256, 256, 256, 0.75);
        
        border-radius: 5px;
        padding: 5px 10px;
    }
    @media(max-width: 650px) {
        justify-content: space-around;
    >div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
        input{
            max-width: 80%;
        }
    }
 
`

const InputBusca = styled.input`
    width: 400px;
`

const InputValor = styled.input`
    width: 75px;
`
const ImgIcone = styled.img`
    width: 18px;
    background-color: rgb(256, 256, 256, 0.75);
        
        border-radius: 5px;
        padding: 5px;
        margin: 5px 10px 5px 0px;
    
`
const ImgPesquisa = styled.img`
    width: 18px;
    left: -30px;
    position: relative;
    opacity: 0.7;
    :hover{
        opacity: 1;
    }
`


const BotaoCarrinho = styled.div `
bottom: 10px;
right: 10px;
position: fixed;
p{
    border-radius: 40%;
    padding: 0px 5px;
    top: -5px;
    left: -10px;
    position: absolute;
    font-size: 15px;
    background-color: rgba(48,8,111,1);
    color: white;
    margin: 0;
}
img{
height: 70px;
width: 70px;
cursor: pointer;
border-radius: 50%;
border: solid  white 2px;
img:hover{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(48,8,111,1) 35%, rgba(48,8,111,1) 70%);
    border: solid  rgba(48,8,111,1) 2px;
}
}
`

class Filtro extends React.Component {
    state = {
        quantidadeProdutos: ""
    }
    
    render() {
       
        return (
            <DivContainerFiltro>
            <DivInputs>
                <div>
            <InputBusca onChange={this.props.handleNome} value ={this.props.valorNome} placeholder="Buscar produto..." type="text">
            </InputBusca>
            <ImgPesquisa src={pesquisa}/>
            </div>
            <div>
            <InputValor onChange={this.props.handleMinimo} value={this.valorMinimo} placeholder="Min" type={"number"}/>
            <ImgIcone src={setaBaixo}/>
            <InputValor onChange={this.props.handleMaximo} value={this.props.valorMaximo} placeholder="Máx" type="number"/>
            <ImgIcone src={setaCima}/>
            </div>
            <div>
                <label>
                Ordenar por: </label>
                <select value={this.props.ordenacao} onChange={this.props.mudarOrdenacao}>
                <option value={''}>Destaques</option>
                <option value={'CRESCENTE'}>Preço: baixo a alto</option>
                <option value={'DECRESCENTE'}>Preço: alto a baixo</option>
                   </select>
                   </div>
            </DivInputs>
            <BotaoCarrinho>
            <img onClick={this.props.mudarPagina} src={carrinho}/>
            <p>{this.props.quantidadeProdutos()}</p>
            </BotaoCarrinho>
            </DivContainerFiltro>
        )
    }

}
export default Filtro;