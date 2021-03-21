import React from 'react';
import styled from "styled-components"

const DivContainerProdutos = styled.div`
 display: flex;
 flex-wrap: wrap;
 max-width: 1000px;
 align-self: center;
 
 @media(max-width: 650px) {
    width: 100%;
    flex-direction: column;
 align-self: center;
 justify-content: center;
 align-items: center;
 >div{
    align-items: center;
 }
 }
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

const ButaoComprar = styled.button`
  
`

const DivRadioTamanho = styled.div`
    display: flex;
    justify-content: space-between;

    
    label{
        
        border-radius: 5px;
        border: 1px solid black;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background-color:  #c5aae980;
        font-size: 18px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            background-color:  #c5aae9;
        }
    }
    input{
        display: none;
        :checked ~ label:first-of-type{
            color: white;
            background-color:  rgba(48,8,111,1);
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

radioButonTamanho = (item) => {
    return ( <DivRadioTamanho><div>
        <input type="radio" name={"tamanho"+item.id} value="PP" id={"PP"+item.id} onChange={() => this.props.mudarTamanho(item.id, "PP")}/>
        <label for={"PP"+item.id}>PP</label>
        </div>
        <div>
        <input type="radio" name={"tamanho"+item.id} value="P" id={"P"+item.id} onChange={() => this.props.mudarTamanho(item.id, "P")}/>
        <label for={"P"+item.id}>P</label>
        </div>
        <div>
        <input type="radio" name={"tamanho"+item.id} value="M" id={"M"+item.id} onChange={() => this.props.mudarTamanho(item.id, "M")}/>
        <label for={"M"+item.id}>M</label>
        </div>
        <div>
        <input type="radio" name={"tamanho"+item.id} value="G" id={"G"+item.id} onChange={() => this.props.mudarTamanho(item.id, "G")}/>
        <label for={"G"+item.id}>G</label>
        </div>
        <div>
        <input type="radio" name={"tamanho"+item.id} value="GG" id={"GG"+item.id} onChange={() => this.props.mudarTamanho(item.id, "GG")}/>
         <label for={"GG"+item.id}>GG</label>
       </div>
       </DivRadioTamanho>
    )
}

render() {
    const listaFiltrada = this.filtrarProdutos()
    return (
            <DivContainerProdutos>
                
            {listaFiltrada.map((item) => {
                return (<DivProduto>
                            <img src={item.imgUrl}/>
                             <h3>{item.name}</h3>
                                {this.radioButonTamanho(item)}
                             <h4>R$ {item.value},00</h4>
                             <button onClick={() => this.props.compraProduto(item.id)}>Comprar</button>  
                         </DivProduto>)})
            }
            </DivContainerProdutos>
    )
}

}

export default Produtos;