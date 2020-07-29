import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Intro from './components/Main/Intro';
import Footer from './components/Footer/Footer';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/'><Main></Main></Route>
        <Route exact path='/intro'><Intro></Intro></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
