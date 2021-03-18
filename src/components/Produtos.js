import React from 'react';
import styled from "styled-components"



const DivContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const Informacoes = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
width: 100%;
`

const DivProduto = styled.div`
    margin: 20px;
    width: 200px;
    
  img{
        width: 100%;
    }
`

class Produtos extends React.Component {
    state = {
        sort: "Decrescente"
    }

filtrarProdutos = () => {
    return this.props.produto
    .filter((produto) => this.props.valorMaximo ? produto.value < this.props.valorMaximo : true)
    .filter((produto) => this.props.valorMinimo ? produto.value > this.props.valorMinimo : true)
    .filter((produto) => this.props.valorNome ? produto.name.includes(this.props.valorNome) : true)
    .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.value - b.value : b.value - a.value)
}

mudarOrdenacao = (event) => {
    this.setState({sort: event.target.value})
}

render() {
    const listaFiltrada = this.filtrarProdutos()
    return (
            <DivContainer>
                <Informacoes>
            <p>Quantidade de produtos: {listaFiltrada.length}</p>
            <label>
             Ordenação:
            <select value={this.state.sort} onChange={this.mudarOrdenacao}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
        </Informacoes>
            {listaFiltrada.map((item) => {
                return (<DivProduto>
                            <img src={item.imgUrl}/>
                             <h3>{item.name}</h3>
                             <h3>R$ {item.value}</h3>
                             <button onClick={() => this.props.compraProduto(item.id)}>Comprar</button>  
                         </DivProduto>)}) 
            }
            </DivContainer>
    )
}

}

export default Produtos;