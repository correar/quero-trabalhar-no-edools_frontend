import React, { Component } from "react";

class App extends Component {
  render(){
    return (
      <div>
        <h1>Quero Trabalar no Edools</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/list">Todos Aplicativos Disponíveis</a></li>
        </ul>
        <div className="content">

        </div>
      </div>     
    );
  }

}

export default App;
