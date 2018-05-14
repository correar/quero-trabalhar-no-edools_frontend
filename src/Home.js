import React, { Component } from "react";

class Home extends Component {
  render() {
    return(
      <div>
        <h2>O que é possível fazer aqui?</h2>
        <ol>
          <li>Listar todos os aplicativos</li>
          <li>Exibir se o aplicativo está ativo ou não
            <ol>
             <li>Ativar um aplicativo</li>
             <li>Desativar um aplicativo</li>
            </ol>
          </li>
        </ol>
      </div>
    ); 
  }
}

export default Home;
