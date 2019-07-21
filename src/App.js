import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header"
import Container from "./components/containerComponents/Container"
import Sample from "./components/sample/Sample";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <div className="App">
        <Header></Header>
          <Switch>
            
            <Route path="/container" component={Container}></Route>
            <Route path="/sample" component={Sample}></Route>
          </Switch>        
      </div>  
      </Router>
     );
  }
}
 
export default App;