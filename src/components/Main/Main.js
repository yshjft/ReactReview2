import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import './mainCommon.css';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      contentList:[
        {id:1, title:'Functional component vs Class component', date :'2020.07.31'},
        
      ],
    }
  }
  render(){
    return(
      <div className='mainContents'>
        <NavLink exact to='/FuncVsClass'>Func Vs Class</NavLink>
      </div>
    );
  }
}

export default Main