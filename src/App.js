import React, { Component } from 'react';
import {Route,BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
import Login from './components/Login/login'
import Regist from './components/Regist/regist'
import Main from './components/Main/Main'
import Newsong from './components/Newsong/Newsong'
import Songlist from './components/Main/Songlist/Songlist'
import Ilike from "./components/Main/Ilike/Ilike"
import Nowshow from "./components/Main/Nowshow/Nowshow"


class App extends Component {
  render() {
    return (
      <div className="App">        
        <Router>
          <div>
          
            <Route path="/nowshow" component={Nowshow}></Route>  
            <Route path="/ilike" component={Ilike}></Route>  
            <Route path="/songlist" component={Songlist}></Route>          
            <Route path="/newsong" component={Newsong}></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                            
            <Route path="/login" component={Login}/>
            <Route path="/regist" component={Regist}/>
            <Route path="/main" component={Main}/>          
            
          </div>         
        </Router>
      </div>
    );
  }
}

export default App;
