import React from 'react';
import MainPage from './MainPage';
import Login from './Login';
import SignUp from './SignUp';
import backgroundImg from '../assets/images/background.jpg';

import { Switch, Route } from 'react-router-dom';

function App() {

  return (

    <div>
      <style jsx>{`
      background: url(${backgroundImg});
      background-size: 200%;
      padding-bottom: 100%;
      `}</style>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;