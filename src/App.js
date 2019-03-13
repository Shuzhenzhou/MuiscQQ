import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import Login from './components/Login/login'
import Regist from './components/Regist/regist'
import Main from './components/Main/Main'


class App extends Component {
  render() {
    return (
      <div className="App">        
        <Router>
          <div>
            
            <Route path="/login" component={Login} />
            <Route path="/regist" component={Regist} />
            <Route path="/main" component={Main} />
            <Redirect to='login'/>
          </div>         
        </Router>
      </div>
    );
  }
}

export default App;
