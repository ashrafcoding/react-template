import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./compononets/Navbar";
import Home from './compononets/pages/Home';
import Services from './compononets/pages/Services'
import Products from './compononets/pages/Products'
import SignUp from './compononets/pages/SignUp'

function App() {
  return (
  
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products"  component={Products} />
          <Route path="/services"  component={Services} />
          <Route path="/signup"  component={SignUp} />
        </Switch>
      </Router>  
   
  );
}

export default App;
