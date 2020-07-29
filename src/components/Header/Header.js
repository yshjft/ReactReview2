import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css'

class Header extends Component{
  render(){
    return(
      <div className='header'>
        <div className='title'>
          React Review Ver 2.0
        </div>
        <div className='navigation'>
          <NavLink exact to='/' className='nav mainNav'>Main</NavLink>
          <NavLink exact to='/intro' className='nav introNav'>Intro</NavLink>
        </div>
      </div>
    )
  }
}

export default Header;