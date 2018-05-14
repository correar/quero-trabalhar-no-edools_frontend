import React, { Component } from "react";
import { Form, Text } from "react-form";
import { withAlert } from 'react-alert';
import "./ListStatus.styl";

class ListStatus extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      data:[],
    };
    try{ 
      this.handleSubmit = this.handleSubmit.bind(this);
    } catch (error){
      console.log(error);
    }
  }

  componentDidMount()
  {   
    const optionsGet = {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Token 06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d',
      }),
    };
        
    fetch('https://core.myedools.info/schools/64/school_features', optionsGet)
    .then((Response)=>Response.json())
    .then((findresponse)=>
    {
      this.setState({
        data:findresponse.schoolfeatures,
      })
    }); 
  }

  handleSubmit(event){
    const active = event.target[0];
    const activevalue = active.value;
    const id = event.target[1];
    const idvalue = id.value;
    event.preventDefault();
    const optionsPost = {
      method: 'put',
      headers: new Headers({
        'Authorization': 'Token 06a8e7ebfe3cb1c6d316edfc87a274ab:c42214a737df45d82aa274247841204d',
        'Accept': 'application/json',
        'Content-type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    };
    if(activevalue == "true")
    {
      fetch('https://core.myedools.info/school_features/'+idvalue+'/deactivate',optionsPost)
      .then((Response) => Response)
      .then((findresponse) => {
        this.componentDidMount();
      })
      .catch((err) => {console.log('Error: '+(err)),
        err ? this.props.alert.error('Não foi possível desativar a feature') : ''}
      )
              
    }
    else if(activevalue == "false")
    {
      fetch('https://core.myedools.info/school_features/'+idvalue+'/activate',optionsPost)
      .then((Response) => Response)
      .then((findresponse) => {
        this.componentDidMount();
      }) 
      .catch((err) => {console.log('Error: '+(err)),
        err ? this.props.alert.error('Não foi possível ativar a feature') : ''}
      )
      
    }
  };

  render()
  {
    return(
      <div className="ListStatus">
        <h2>Lista dos Aplicativos da Escola 64</h2>
        <div className="TitleRow">
          <div className="TitleName">ID</div>
          <div className="TitleName">Active</div>
          <div className="TitleName">Available</div>
          <div className="TitleName">Feature</div>
          <div className="TitleName">#</div>
        </div>    
        {
          this.state.data.map((dynamicData,key) =>
            <div className="Row" key={key}>
              <form onSubmit={this.handleSubmit}>
                <div className="Data"><div className="TitleData">ID: </div>{dynamicData.id}</div>
                <div className="Data"><div className="TitleData">Active: </div>{String(dynamicData.active)}
                  <input ref={(ref) => {this.active = ref}} type="hidden" name={"active"+dynamicData.id} value={String(dynamicData.active)}/>
                  <input ref={(ref) => {this.id = ref}} type="hidden" name={"id"+dynamicData.id} value={dynamicData.id}/>
                </div>
                <div className="Data"><div className="TitleData">Availabe: </div>{String(dynamicData.available)}</div>
                <div className="Data"><div className="TitleData">Feature: </div>{dynamicData.feature_id}</div>
                <div className="Data"><button type="Submit" className={dynamicData.active ? 'btn-danger' : 'btn-success'}>{dynamicData.active ? 'Desativar' : 'Ativar'}</button></div>
              </form>
            </div>
          )
          
        }
      </div>
    );
  }
}

export default withAlert(ListStatus);
