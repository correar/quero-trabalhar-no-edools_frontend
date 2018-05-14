import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ListAll from "./ListAll";
import ListStatus from "./ListStatus";

class App extends Component {
 render(){
    return (
      <HashRouter>
        <div>
          <h1>Quero Trabalar no Edools</h1>
          <ul className="header">
                <li><NavLink exact to="/">Início</NavLink></li>
                <li><NavLink to="/list">Todos Aplicativos Disponíveis</NavLink></li>
                <li><NavLink to="/status">Verifica o Status do Aplicativo</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={ListAll}/>
            <Route path="/status" component={ListStatus}/>
          </div>
        </div>     
      </HashRouter>
    );
  }

}

export default App;
