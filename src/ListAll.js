import React, { Component } from "react";
import "./ListAll.styl";

class ListAll extends Component{
  constructor()
  {
    super();
    this.state={
      data:[],
    }
  }
  componentDidMount()
  {   
    //fetch('https://facebook.github.io/react-native/movies.json').
    fetch('https://core.myedools.info/features', {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Token 06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d',
      }),
    }).
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      console.log(findresponse.features)
      this.setState({
        data:findresponse.features,
      })
    });
  }
  render()
  {
    return(
      <div className="App">
        <div className="titleRow">
          <div className="titleName">ID</div>
          <div className="titleName">Feature</div>
        </div>    
        {
          this.state.data.map((dynamicData,key) =>
            <div className="row" key={key}>
              <div className="Dados">{dynamicData.id}</div>
              <div className="Dados">{dynamicData.feature_key}</div>
            </div>
          )
          
        }
      </div>
    );
  }
}

export default App;
