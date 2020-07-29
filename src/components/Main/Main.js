import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import './mainCommon.css';

class Main extends Component{
  render(){
    return(
      <div className='mainContents'>
        <div>Functional VS Class</div>
        <div>CRUD</div>
        <div>Router</div>
      </div>
    );
  }
}

export default Main