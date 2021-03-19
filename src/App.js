import React from 'react';
import styled from "styled-components"
import Home from "./components/Home"

import Carrinho from "./components/Carrinho"

const DivContainer = styled.div`
  margin:0;
  padding:0;
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
`
 
class App extends React.Component {
  state = {
    pagina: "Home"
  }
  onClickMudarPagina = () =>{
    if(this.state.pagina === "Home")
      this.setState({
        pagina: "Carrinho"
      })
      else{
        this.setState({
          pagina: "Home"
        })
      }
 }
  rederizaTela = () => { 
  switch (this.state.pagina ) {
    case "Home":
      return (<div>
      <Home mudarPagina={this.onClickMudarPagina}
      
      /> 
         </div>
       )
      case "Carrinho":
        return (<div>
          <Carrinho mudarPagina={this.onClickMudarPagina}
          
          /> </div>)
    }
  }

  render () {
  return ( <DivContainer>
      {this.rederizaTela()}
    </DivContainer>
  )
}
}
export default App;
