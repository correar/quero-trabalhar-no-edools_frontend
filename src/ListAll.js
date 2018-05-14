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
    const options = {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Token 06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d',
      }),
    }
    fetch('https://core.myedools.info/features', options).
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
      <div className="ListAll">
        <h2>Lista de todos Aplicativos Disponíveis</h2>
        <div className="TitleRow">
          <div className="TitleName">ID</div>
          <div className="TitleName">Feature</div>
        </div>    
        {
          this.state.data.map((dynamicData,key) =>
            <div className="Row" key={key}>
              <div className="Data"><div className="TitleData">ID: </div>{dynamicData.id}</div>
              <div className="Data"><div className="TitleData">Feature: </div>{dynamicData.feature_key}</div>
            </div>
          )
          
        }
      </div>
    );
  }
}

export default ListAll;
