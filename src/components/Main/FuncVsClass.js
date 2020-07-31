import React from 'react';

import {NavLink} from 'react-router-dom';

import './content.css';

function FuncVsClass(){
  return(
    <div className="content">
      <div className="contentTitle">
        Functional component VS Class Component
      </div>
      <div className="contentDate">
        Date 2020.07.31
      </div>
      <div className="contentTxt">
        React의 함수형 컴포넌트와 class 컴포넌트를 정리해봅니다.
      </div>
      <div className="returnBtn">
        <NavLink exact to='/'>
          <button className="returnMain">return to main</button>
        </NavLink>
      </div>
    </div>
  );
}

export default FuncVsClass;