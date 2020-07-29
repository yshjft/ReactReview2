import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div className='Footer'>
        <div className='footerTitle'>React Review Ver 2.0</div>
        <div className='madeBy'>made by yshjft</div>
        <a href='https://github.com/yshjft' className='github'>yshjft's github</a>
      </div>
    )
  }
}

export default Footer;