import React from 'react';
import styled from "styled-components"
import Home from "./components/Home"

import Carrinho from "./components/Carrinho"

const DivContainer = styled.div`
  margin:0;
  padding:0;
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
`
 
class App extends React.Component {
  state = {
    pagina: "Home"
  }
  onClickMudarPagina = () =>{
      this.setState({
        pagina: "Carrinho"
      })
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
        return (<div>Aqui"</div>)
      // default:
        // return (<div>Aqui2</div>)
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
